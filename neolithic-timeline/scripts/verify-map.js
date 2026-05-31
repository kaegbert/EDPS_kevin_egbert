"use strict";
const fs = require("fs");
const path = require("path");
const svg = fs.readFileSync(path.join(__dirname, "..", "world-map-land.svg"), "utf8");
const paths = [...svg.matchAll(/d="([^"]+)"/g)].map((m) => m[1]);

function bbox(d) {
  const pts = [...d.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)].map((m) => [+m[1], +m[2]]);
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
    w: Math.max(...xs) - Math.min(...xs),
    h: Math.max(...ys) - Math.min(...ys),
  };
}

let bad = 0;
let europe = 0;
let asia = 0;
function subpaths(d) {
  return d.split(/(?=M)/).filter(Boolean);
}

paths.forEach((d, i) => {
  const b = bbox(d);
  let badSub = false;
  subpaths(d).forEach((sub) => {
    const pts = [...sub.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)].map((m) => [+m[1], +m[2]]);
    for (let j = 1; j < pts.length; j++) {
      const dx = Math.abs(pts[j][0] - pts[j - 1][0]);
      const dy = Math.abs(pts[j][1] - pts[j - 1][1]);
      const sb = bbox(sub);
      if (dx > 100 || (sb.h < 4 && sb.w > 120) || (sb.w > 300 && sb.h < 8)) {
        badSub = true;
      }
    }
  });
  if (badSub) {
    bad++;
    console.log("bad path", i, "w", b.w, "h", b.h);
  }
  if (b.minX < 75 && b.maxX > 5 && b.minY < 75 && b.maxY > 15 && b.w > 15 && b.h > 10) europe++;
  if (b.minX < 160 && b.maxX > 45 && b.minY < 85 && b.maxY > 5 && b.w > 15 && b.h > 10) asia++;
});
console.log("paths", paths.length, "bad", bad, "europe-ish", europe, "asia-ish", asia);
