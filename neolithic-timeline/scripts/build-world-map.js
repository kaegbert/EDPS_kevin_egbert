/**
 * Build world-map-land.svg from Natural Earth land (world-atlas land-110m).
 * Plate carrée: viewBox 0 0 360 180, x = lon + 180, y = 90 - lat
 */
"use strict";

const fs = require("fs");
const https = require("https");
const path = require("path");

const OUT = path.join(__dirname, "..", "world-map-land.svg");
const URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";
/** Ocean stays white; continents use light grey for contrast */
const MAP_LAND_FILL = "#e8e8e8";
const MAP_WATER_FILL = "#ffffff";

function fetchJson(url) {
  return new Promise(function (resolve, reject) {
    https
      .get(url, function (res) {
        let body = "";
        res.on("data", function (c) {
          body += c;
        });
        res.on("end", function () {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function transformPoint(x, y, t) {
  return [x * t.scale[0] + t.translate[0], y * t.scale[1] + t.translate[1]];
}

function decodeArcs(topology) {
  const t = topology.transform;
  return topology.arcs.map(function (arc) {
    let x = 0;
    let y = 0;
    const pts = [];
    for (let i = 0; i < arc.length; i++) {
      x += arc[i][0];
      y += arc[i][1];
      pts.push(transformPoint(x, y, t));
    }
    return pts;
  });
}

function arcPoints(decoded, i) {
  if (i < 0) {
    const pts = decoded[~i].slice();
    pts.reverse();
    return pts;
  }
  return decoded[i];
}

function ringFromArcs(decoded, indices) {
  let points = [];
  indices.forEach(function (i) {
    const seg = arcPoints(decoded, i);
    if (points.length) {
      points = points.concat(seg.slice(1));
    } else {
      points = points.concat(seg);
    }
  });
  return points;
}

function project(lon, lat) {
  return [+(lon + 180).toFixed(2), +(90 - lat).toFixed(2)];
}

/** Break only spurious flat chords (e.g. equator), not legitimate coastlines */
const MAX_FLAT_CHORD_DX = 90;
const MAX_FLAT_CHORD_DY = 4;
const MAX_SEGMENT_DY = 40;

function ringToPath(ring) {
  if (!ring || ring.length < 2) return "";

  const chunks = [];
  let chunk = [];

  function flush() {
    if (chunk.length >= 3) chunks.push(chunk);
    chunk = [];
  }

  for (let i = 0; i < ring.length; i++) {
    const p = project(ring[i][0], ring[i][1]);
    if (chunk.length > 0) {
      const prev = chunk[chunk.length - 1];
      const dx = Math.abs(p[0] - prev[0]);
      const dy = Math.abs(p[1] - prev[1]);
      if ((dx > MAX_FLAT_CHORD_DX && dy < MAX_FLAT_CHORD_DY) || dy > MAX_SEGMENT_DY) {
        flush();
      }
    }
    chunk.push(p);
  }
  flush();

  if (!chunks.length) return "";

  return chunks
    .map(function (seg) {
      return segmentToPath(seg);
    })
    .join("");
}

function segmentToPath(seg) {
  if (seg.length < 2) return "";
  let d = "M" + seg[0][0] + "," + seg[0][1];
  for (let j = 1; j < seg.length; j++) {
    d += "L" + seg[j][0] + "," + seg[j][1];
  }
  const first = seg[0];
  const last = seg[seg.length - 1];
  const closeDx = Math.abs(first[0] - last[0]);
  const closeDy = Math.abs(first[1] - last[1]);
  if (seg.length >= 3 && !(closeDx > MAX_FLAT_CHORD_DX && closeDy < MAX_FLAT_CHORD_DY)) {
    d += "Z";
  }
  return d;
}

function splitSubpaths(d) {
  return d.split(/(?=M)/).filter(function (s) {
    return s.length > 0;
  });
}

/** Remove flat horizontal chords within each M… subpath */
function sanitizeSubpath(sub) {
  const pts = [];
  [...sub.matchAll(/([ML])([\d.-]+),([\d.-]+)/g)].forEach(function (m) {
    pts.push({ x: +m[2], y: +m[3] });
  });
  if (pts.length < 2) return "";

  const chunks = [];
  let chunk = [pts[0]];

  function flush() {
    if (chunk.length >= 3) chunks.push(chunk);
    chunk = [];
  }

  for (let i = 1; i < pts.length; i++) {
    const p = pts[i];
    const prev = chunk[chunk.length - 1];
    const dx = Math.abs(p.x - prev.x);
    const dy = Math.abs(p.y - prev.y);
    if (dx > MAX_FLAT_CHORD_DX && dy < MAX_FLAT_CHORD_DY) {
      flush();
      chunk = [p];
      continue;
    }
    chunk.push(p);
  }
  flush();

  if (!chunks.length) return "";

  return chunks
    .map(function (seg) {
      const coords = seg.map(function (p) {
        return [p.x, p.y];
      });
      return segmentToPath(coords);
    })
    .join("");
}

function sanitizePath(d) {
  if (!d) return "";
  return splitSubpaths(d)
    .map(sanitizeSubpath)
    .filter(Boolean)
    .join("");
}

/** Drop graticule-like chords (equator / polar artifacts from plate carrée cuts) */
function isBadSubpath(sub) {
  const pts = [...sub.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)].map(function (m) {
    return [+m[1], +m[2]];
  });
  if (pts.length < 3) return true;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let maxDx = 0;
  let maxDy = 0;

  for (let j = 0; j < pts.length; j++) {
    minX = Math.min(minX, pts[j][0]);
    maxX = Math.max(maxX, pts[j][0]);
    minY = Math.min(minY, pts[j][1]);
    maxY = Math.max(maxY, pts[j][1]);
    if (j > 0) {
      maxDx = Math.max(maxDx, Math.abs(pts[j][0] - pts[j - 1][0]));
      maxDy = Math.max(maxDy, Math.abs(pts[j][1] - pts[j - 1][1]));
    }
  }

  const w = maxX - minX;
  const h = maxY - minY;
  if (h < 3 && w > 120) return true;
  if (w > 300 && h < 6) return true;
  if (maxDx > 120 && h < 10 && maxDy < 2) return true;
  return false;
}

function cleanPath(d) {
  if (!d) return "";
  const kept = [];
  splitSubpaths(d).forEach(function (sub) {
    const cleaned = sanitizeSubpath(sub);
    if (!cleaned) return;
    splitSubpaths(cleaned).forEach(function (part) {
      if (!isBadSubpath(part)) kept.push(part);
    });
  });
  return kept.join("");
}

/** Omit Antarctica and sub-Antarctic islands (polar land south of ~50°S). */
function ringIsAntarctica(ring) {
  if (!ring || ring.length < 3) return false;
  let maxLat = -90;
  let minLat = 90;
  let sumLat = 0;
  ring.forEach(function (p) {
    maxLat = Math.max(maxLat, p[1]);
    minLat = Math.min(minLat, p[1]);
    sumLat += p[1];
  });
  const meanLat = sumLat / ring.length;
  return maxLat < -48 && (minLat < -60 || meanLat < -62);
}

function geometryToPaths(topology, decoded, geom) {
  const paths = [];
  function pushRing(ringArcs) {
    const ring = ringFromArcs(decoded, ringArcs);
    if (ringIsAntarctica(ring)) return;
    const d = ringToPath(ring);
    if (d) paths.push(d);
  }
  if (geom.type === "Polygon") {
    geom.arcs.forEach(pushRing);
  } else if (geom.type === "MultiPolygon") {
    geom.arcs.forEach(function (polygon) {
      polygon.forEach(pushRing);
    });
  }
  return paths;
}

/** Tight viewBox around remaining land (plate carrée y = 90 − lat). */
function landViewBoxFromPaths(paths) {
  let minY = Infinity;
  let maxY = -Infinity;
  paths.forEach(function (d) {
    [...d.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)].forEach(function (m) {
      const y = +m[2];
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    });
  });
  const span = maxY - minY;
  const padTop = Math.max(4, span * 0.04);
  const padBottom = Math.max(10, span * 0.08);
  const y = Math.max(0, minY - padTop);
  const height = Math.min(180, span + padTop + padBottom);
  return { x: 0, y: +y.toFixed(2), width: 360, height: +height.toFixed(2) };
}

async function main() {
  const topology = await fetchJson(URL);
  const decoded = decodeArcs(topology);
  const land = topology.objects.land;
  const allPaths = [];

  land.geometries.forEach(function (geom) {
    geometryToPaths(topology, decoded, geom).forEach(function (d) {
      const clean = cleanPath(d);
      if (clean) allPaths.push(clean);
    });
  });

  const view = landViewBoxFromPaths(allPaths);
  const viewBoxStr = view.x + " " + view.y + " " + view.width + " " + view.height;

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBoxStr + '" aria-hidden="true">\n' +
    '  <rect width="360" height="180" fill="' + MAP_WATER_FILL + '"/>\n' +
    '  <g class="timeline-world-map-land" fill="' +
    MAP_LAND_FILL +
    '" stroke="#000000" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round">\n' +
    allPaths.map(function (d) {
      return '    <path d="' + d + '"/>';
    }).join("\n") +
    "\n  </g>\n</svg>\n";

  fs.writeFileSync(OUT, svg, "utf8");
  console.log("Wrote", OUT, "(" + allPaths.length + " paths, viewBox " + viewBoxStr + ")");
}

main().catch(function (err) {
  console.error(err);
  process.exit(1);
});
