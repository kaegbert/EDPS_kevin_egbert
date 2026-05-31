(function () {
  "use strict";

  /**
   * Full-world plate carrée viewport (no Antarctica, all longitudes).
   * height matches world-map-land.svg viewBox from scripts/build-world-map.js
   */
  const MAP_FULL_VIEW = { x: 0, y: 0.78, width: 360, height: 155.97, shiftX: 0 };

  /** Approximate centroids for geographic area keys */
  const GEO_CENTROIDS = {
    asia: { lat: 35, lon: 105 },
    europe: { lat: 54, lon: 15 },
    africa: { lat: 4, lon: 20 },
    americas: { lat: -8, lon: -65 },
    oceania: { lat: -22, lon: 140 },
    "middle-east": { lat: 31, lon: 44 },
    eurasia: { lat: 52, lon: 65 },
    beringia: { lat: 66, lon: -169 },
  };

  /** Region label → { lat, lon } for map markers */
  const REGION_COORDS = {
    Japan: { lat: 36, lon: 139 },
    Eurasia: { lat: 52, lon: 65 },
    Levant: { lat: 33, lon: 36 },
    Beringia: { lat: 66, lon: -169 },
    "Fertile Crescent": { lat: 33, lon: 39 },
    "Zagros Mountains": { lat: 33, lon: 47 },
    Anatolia: { lat: 39, lon: 33 },
    "Near East": { lat: 32, lon: 38 },
    Mesoamerica: { lat: 19, lon: -99 },
    Egypt: { lat: 26, lon: 31 },
    Andes: { lat: -13, lon: -72 },
    "Yellow River region": { lat: 36, lon: 114 },
    "Yangtze River, China": { lat: 30, lon: 115 },
    "Indus region": { lat: 28, lon: 68 },
    "Central Europe": { lat: 50, lon: 15 },
    China: { lat: 35, lon: 105 },
    Sahara: { lat: 22, lon: 5 },
    "Near East and Balkans": { lat: 36, lon: 28 },
    Mediterranean: { lat: 38, lon: 18 },
    Mesopotamia: { lat: 32, lon: 44 },
    "Middle East": { lat: 30, lon: 45 },
    "Eurasian steppe": { lat: 48, lon: 68 },
    "Atlantic Europe": { lat: 47, lon: -4 },
    Britain: { lat: 54, lon: -2 },
    "Eastern Europe": { lat: 49, lon: 28 },
    "South Asia": { lat: 22, lon: 78 },
    "Indus River Valley": { lat: 27, lon: 68 },
    "Orkney, Scotland": { lat: 59, lon: -3 },
    Peru: { lat: -10, lon: -76 },
    "Romania / Ukraine": { lat: 48, lon: 28 },
    Ireland: { lat: 53, lon: -8 },
    Crete: { lat: 35, lon: 25 },
    "Southeast Asia / Pacific": { lat: 5, lon: 115 },
    "New Guinea highlands": { lat: -6, lon: 145 },
    "West-Central Africa": { lat: 2, lon: 18 },
    "Gulf Coast Mexico": { lat: 20, lon: -95 },
    Aegean: { lat: 38, lon: 25 },
    "Indus Valley": { lat: 27, lon: 68 },
    Syria: { lat: 35, lon: 38 },
    Caucasus: { lat: 42, lon: 44 },
    Kazakhstan: { lat: 48, lon: 67 },
    Altai: { lat: 50, lon: 86 },
    Siberia: { lat: 62, lon: 90 },
    Mongolia: { lat: 46, lon: 103 },
    Bulgaria: { lat: 43, lon: 25 },
    France: { lat: 46, lon: 2 },
    Iberia: { lat: 40, lon: -4 },
    Denmark: { lat: 56, lon: 10 },
    Alps: { lat: 46, lon: 10 },
    Portugal: { lat: 39, lon: -8 },
    Serbia: { lat: 44, lon: 21 },
    Nubia: { lat: 20, lon: 32 },
    Mauritania: { lat: 20, lon: -10 },
    "West Africa": { lat: 12, lon: -2 },
    Mali: { lat: 17, lon: -4 },
    Ethiopia: { lat: 9, lon: 39 },
    Kenya: { lat: 0, lon: 37 },
    Congo: { lat: -2, lon: 22 },
    Maghreb: { lat: 28, lon: 2 },
    Amazon: { lat: -5, lon: -60 },
    Ecuador: { lat: -2, lon: -78 },
    Mexico: { lat: 23, lon: -102 },
    Brazil: { lat: -10, lon: -52 },
    Louisiana: { lat: 31, lon: -92 },
    "North America": { lat: 40, lon: -100 },
    Australia: { lat: -25, lon: 133 },
    Pacific: { lat: 0, lon: -160 },
    Vanuatu: { lat: -16, lon: 168 },
    Tonga: { lat: -20, lon: -175 },
    Fiji: { lat: -18, lon: 178 },
    "Solomon Islands": { lat: -8, lon: 159 },
    Marianas: { lat: 15, lon: 146 },
    Micronesia: { lat: 7, lon: 158 },
    Polynesia: { lat: -15, lon: -140 },
    Samoa: { lat: -14, lon: -172 },
    Melanesia: { lat: -8, lon: 155 },
  };

  function projectLatLon(lat, lon) {
    return {
      x: lon + 180,
      y: 90 - lat,
    };
  }

  /**
   * Group markers closer than clusterEps (plate-carrée units) and fan them out in a ring.
   * Each marker gains displayX/displayY; singletons keep x/y.
   */
  function groupMarkersByProximity(markers, clusterEps) {
    const groups = [];
    markers.forEach(function (m) {
      let target = null;
      for (let i = 0; i < groups.length; i++) {
        const g = groups[i];
        for (let j = 0; j < g.length; j++) {
          const dx = m.x - g[j].x;
          const dy = m.y - g[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < clusterEps) {
            target = g;
            break;
          }
        }
        if (target) break;
      }
      if (target) target.push(m);
      else groups.push([m]);
    });
    return groups;
  }

  function spreadProjectedMarkers(markers, options) {
    const opts = options || {};
    const clusterEps = opts.clusterEps != null ? opts.clusterEps : 1.35;
    const baseRadius = opts.baseRadius != null ? opts.baseRadius : 2.4;
    const radiusPerPin = opts.radiusPerPin != null ? opts.radiusPerPin : 1.15;
    const maxRadius = opts.maxRadius != null ? opts.maxRadius : 9;

    const groups = groupMarkersByProximity(markers, clusterEps);

    groups.forEach(function (group) {
      if (group.length === 1) {
        group[0].displayX = group[0].x;
        group[0].displayY = group[0].y;
        group[0].clusterSize = 1;
        return;
      }

      let cx = 0;
      let cy = 0;
      group.forEach(function (m) {
        cx += m.x;
        cy += m.y;
      });
      cx /= group.length;
      cy /= group.length;

      const n = group.length;
      const radius = Math.min(maxRadius, baseRadius + (n - 1) * radiusPerPin);

      group.forEach(function (m, i) {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        m.displayX = cx + radius * Math.cos(angle);
        m.displayY = cy + radius * Math.sin(angle);
        m.clusterSize = n;
        m.clusterCenterX = cx;
        m.clusterCenterY = cy;
      });
    });

    return markers;
  }

  function formatViewBox(box) {
    return box.x + " " + box.y + " " + box.width + " " + box.height;
  }

  window.NeolithiaGeo = {
    MAP_FULL_VIEW: MAP_FULL_VIEW,
    GEO_CENTROIDS: GEO_CENTROIDS,
    REGION_COORDS: REGION_COORDS,
    projectLatLon: projectLatLon,
    formatViewBox: formatViewBox,
    spreadProjectedMarkers: spreadProjectedMarkers,
    getCoordinates: function (event, resolveGeo) {
      if (typeof event.lat === "number" && typeof event.lon === "number") {
        return { lat: event.lat, lon: event.lon };
      }
      if (event.region && REGION_COORDS[event.region]) {
        return REGION_COORDS[event.region];
      }
      const geo = resolveGeo(event);
      return GEO_CENTROIDS[geo] || { lat: 0, lon: 0 };
    },
  };
})();
