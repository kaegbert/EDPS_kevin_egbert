(function () {
  "use strict";

  const STORAGE_ENABLED = "timeline-compare-enabled";
  const YEAR_RANGE = { start: 1800, end: 2020 };

  const TIMELINES = [
    {
      id: "media",
      name: "Media history",
      color: "#2317c2",
      events: [
        { year: 1440, title: "Printing press", detail: "Gutenberg's press spreads mass-produced text across Europe." },
        { year: 1605, title: "First newspaper", detail: "The Relation in Strasbourg begins regular printed news reports." },
        { year: 1690, title: "American newspaper", detail: "Publick Occurrences becomes the first newspaper published in Boston." },
        { year: 1837, title: "Electric telegraph", detail: "Samuel Morse demonstrates long-distance coded messaging over wire." },
        { year: 1839, title: "Daguerreotype camera", detail: "Louis Daguerre unveils a practical process for capturing photographs." },
        { year: 1876, title: "Telephone patented", detail: "Alexander Graham Bell receives the patent for voice transmission by wire." },
        { year: 1877, title: "Phonograph invented", detail: "Thomas Edison records and plays back sound for the first time." },
        { year: 1888, title: "Kodak camera", detail: "George Eastman sells an easy-to-use camera that popularizes photography." },
        { year: 1889, title: "Roll film", detail: "Flexible celluloid film replaces heavy glass plates in cameras." },
        { year: 1895, title: "First movie screening", detail: "The Lumière brothers show films to a paying audience in Paris." },
        { year: 1927, title: "The Jazz Singer", detail: "The first widely successful feature film with synchronized dialogue." },
        { year: 1936, title: "Regular TV broadcasts", detail: "The BBC begins a scheduled television service." },
        { year: 1948, title: "LP record format", detail: "Columbia Records introduces the long-playing vinyl album." },
        { year: 1969, title: "ARPANET message sent", detail: "An early packet-switched network lays groundwork for the internet." },
        { year: 1982, title: "Compact disc", detail: "Sony and Philips launch the CD as a digital audio format." },
        { year: 1991, title: "World Wide Web", detail: "Tim Berners-Lee releases the web to the public." },
        { year: 2001, title: "iPod released", detail: "Apple popularizes portable digital music libraries." },
        { year: 2007, title: "First iPhone", detail: "Smartphones reshape mobile media and communication." },
      ],
    },
    {
      id: "art",
      name: "Art history",
      color: "#1a7f37",
      events: [
        { year: 1434, title: "Linear perspective", detail: "Brunelleschi demonstrates mathematical depth in painting." },
        { year: 1503, title: "Mona Lisa begun", detail: "Leonardo da Vinci starts his portrait of Lisa Gherardini." },
        { year: 1874, title: "Impressionist exhibition", detail: "Artists break from academic tradition in Paris." },
        { year: 1907, title: "Les Demoiselles d'Avignon", detail: "Picasso's painting opens the door to Cubism." },
        { year: 1917, title: "Fountain", detail: "Marcel Duchamp submits a readymade urinal as sculpture." },
        { year: 1928, title: "Surrealism expands", detail: "Dalí and others push dream imagery into mainstream art." },
        { year: 1962, title: "Campbell's Soup Cans", detail: "Warhol elevates consumer packaging to fine art." },
        { year: 1989, title: "Berlin Wall falls", detail: "Global political change inspires new artistic responses." },
      ],
    },
    {
      id: "medicine",
      name: "Medicine history",
      color: "#cf222e",
      events: [
        { year: 1543, title: "Modern anatomy", detail: "Andreas Vesalius publishes detailed illustrations of the human body." },
        { year: 1628, title: "Blood circulation", detail: "William Harvey shows the heart pumps blood through a closed system." },
        { year: 1676, title: "Microorganisms seen", detail: "Antonie van Leeuwenhoek observes bacteria and protozoa under a microscope." },
        { year: 1747, title: "Scurvy treatment", detail: "James Lind's trial shows citrus fruit prevents scurvy in sailors." },
        { year: 1796, title: "Smallpox vaccine", detail: "Edward Jenner tests the first successful vaccination." },
        { year: 1816, title: "Stethoscope invented", detail: "René Laennec creates a tool to listen to heart and lung sounds." },
        { year: 1846, title: "Ether anesthesia", detail: "Public surgery with anesthesia transforms medical practice." },
        { year: 1847, title: "Handwashing saves lives", detail: "Ignaz Semmelweis cuts childbirth fever deaths through hygiene." },
        { year: 1865, title: "Germ theory", detail: "Louis Pasteur's work links microbes to disease." },
        { year: 1869, title: "DNA discovered", detail: "Friedrich Miescher isolates nuclein from human cells." },
        { year: 1921, title: "Insulin treatment", detail: "Insulin is first used to treat diabetes in a patient." },
        { year: 1928, title: "Penicillin discovered", detail: "Alexander Fleming identifies the first major antibiotic." },
        { year: 1953, title: "DNA structure", detail: "Watson, Crick, and Franklin reveal the double helix." },
        { year: 1990, title: "Human Genome Project", detail: "An international effort begins mapping human genes." },
        { year: 2020, title: "COVID-19 vaccines", detail: "New vaccines deploy worldwide in record time." },
      ],
    },
    {
      id: "science",
      name: "Science history",
      color: "#b45309",
      events: [
        { year: 1543, title: "Heliocentric model", detail: "Copernicus argues Earth orbits the Sun, reshaping astronomy." },
        { year: 1609, title: "Telescopic observations", detail: "Galileo records moons of Jupiter and phases of Venus." },
        { year: 1687, title: "Principia Mathematica", detail: "Newton publishes laws of motion and universal gravitation." },
        { year: 1789, title: "Conservation of mass", detail: "Lavoisier's chemistry experiments establish modern chemical theory." },
        { year: 1859, title: "Origin of Species", detail: "Darwin outlines evolution by natural selection." },
        { year: 1869, title: "Periodic table", detail: "Mendeleev organizes elements by recurring properties." },
        { year: 1896, title: "Radioactivity found", detail: "Becquerel discovers that uranium emits invisible rays." },
        { year: 1905, title: "Special relativity", detail: "Einstein redefines space, time, and energy." },
        { year: 1927, title: "Uncertainty principle", detail: "Heisenberg sets limits on measuring quantum particles." },
        { year: 1953, title: "DNA structure", detail: "Watson, Crick, and Franklin reveal the double helix." },
        { year: 1969, title: "Moon landing", detail: "Apollo 11 astronauts walk on the lunar surface." },
        { year: 2012, title: "Higgs boson detected", detail: "CERN confirms a particle predicted by the Standard Model." },
      ],
    },
    {
      id: "technology",
      name: "Technology history",
      color: "#6639ba",
      events: [
        { year: 1712, title: "Steam engine", detail: "Newcomen's engine pumps water from mines using steam power." },
        { year: 1769, title: "Improved steam engine", detail: "Watt's separate condenser makes steam power far more efficient." },
        { year: 1825, title: "First passenger railway", detail: "The Stockton and Darlington Railway opens in England." },
        { year: 1879, title: "Practical light bulb", detail: "Edison develops a long-lasting incandescent lamp." },
        { year: 1903, title: "Powered flight", detail: "The Wright brothers achieve sustained, controlled airplane flight." },
        { year: 1945, title: "ENIAC completed", detail: "The first general-purpose electronic computer begins operation." },
        { year: 1957, title: "Sputnik launched", detail: "The Soviet Union sends the first artificial satellite into orbit." },
        { year: 1971, title: "Microprocessor", detail: "Intel's 4004 puts a full CPU on a single chip." },
        { year: 1981, title: "IBM PC released", detail: "Personal computing spreads into homes and offices." },
        { year: 1997, title: "Deep Blue wins", detail: "IBM's chess computer defeats world champion Garry Kasparov." },
        { year: 2007, title: "iPhone released", detail: "Touchscreen smartphones merge computing with daily life." },
        { year: 2022, title: "ChatGPT launched", detail: "Large language models bring AI assistants to the public." },
      ],
    },
    {
      id: "music",
      name: "Music history",
      color: "#bf3989",
      events: [
        { year: 1600, title: "Opera emerges", detail: "Early Baroque opera takes shape in Italian courts." },
        { year: 1750, title: "End of Baroque era", detail: "Bach's death marks a turning point in Western classical music." },
        { year: 1824, title: "Beethoven's Ninth", detail: "The symphony premieres in Vienna with its choral finale." },
        { year: 1906, title: "First radio music", detail: "Reginald Fessenden broadcasts voice and music over the air." },
        { year: 1925, title: "Electrical recording", detail: "Microphones replace acoustic horns in studio recording." },
        { year: 1948, title: "Long-playing record", detail: "The LP format allows full albums on a single disc." },
        { year: 1954, title: "Rock and roll", detail: "Elvis Presley and others fuse rhythm and blues with pop." },
        { year: 1965, title: "Dylan goes electric", detail: "Newport Folk Festival performance divides folk purists." },
        { year: 1969, title: "Woodstock", detail: "A massive festival defines 1960s counterculture music." },
        { year: 1983, title: "MIDI standard", detail: "Electronic instruments gain a shared digital language." },
        { year: 1999, title: "Napster launches", detail: "Peer-to-peer sharing disrupts how music is distributed." },
        { year: 2008, title: "Spotify founded", detail: "Streaming subscriptions reshape the music industry." },
      ],
    },
  ];

  const filtersEl = document.getElementById("timeline-filters");
  const chartEl = document.getElementById("timeline-chart");
  const customChartEl = document.getElementById("timeline-custom-chart");
  const customSummaryEl = document.getElementById("custom-timeline-summary");
  const customClearBtn = document.getElementById("custom-timeline-clear");
  const rangeSummaryEl = document.getElementById("timeline-range-summary");
  const showAllBtn = document.getElementById("timeline-show-all");
  const hideAllBtn = document.getElementById("timeline-hide-all");

  let enabled = loadEnabledState();
  const selectedEvents = new Set();

  function loadEnabledState() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_ENABLED) || "{}");
      const state = {};
      TIMELINES.forEach(function (timeline) {
        state[timeline.id] =
          stored[timeline.id] !== undefined ? Boolean(stored[timeline.id]) : true;
      });
      return state;
    } catch (error) {
      const state = {};
      TIMELINES.forEach(function (timeline) {
        state[timeline.id] = true;
      });
      return state;
    }
  }

  function saveEnabledState() {
    localStorage.setItem(STORAGE_ENABLED, JSON.stringify(enabled));
  }

  function getEnabledTimelines() {
    return TIMELINES.filter(function (timeline) {
      return enabled[timeline.id];
    });
  }

  function getEventKey(timeline, event) {
    return timeline.id + "::" + event.year + "::" + event.title;
  }

  function isEventSelected(timeline, event) {
    return selectedEvents.has(getEventKey(timeline, event));
  }

  function toggleEventSelection(timeline, event) {
    const key = getEventKey(timeline, event);

    if (selectedEvents.has(key)) {
      selectedEvents.delete(key);
    } else {
      selectedEvents.add(key);
    }

    renderCustomTimeline();
  }

  function getSelectedEventItems() {
    const items = [];

    TIMELINES.forEach(function (timeline) {
      timeline.events.forEach(function (event) {
        if (!isEventSelected(timeline, event)) {
          return;
        }

        items.push({
          event: event,
          timeline: timeline,
        });
      });
    });

    items.sort(function (a, b) {
      return (
        a.event.year - b.event.year ||
        a.event.title.localeCompare(b.event.title)
      );
    });

    return items;
  }

  function getCustomTimelineBounds(items) {
    if (items.length === 0) {
      return null;
    }

    let minYear = items[0].event.year;
    let maxYear = items[0].event.year;

    items.forEach(function (item) {
      minYear = Math.min(minYear, item.event.year);
      maxYear = Math.max(maxYear, item.event.year);
    });

    const padding = Math.max(5, Math.round((maxYear - minYear) * 0.08));
    return {
      minYear: minYear - padding,
      maxYear: maxYear + padding,
    };
  }

  function isVisibleEvent(event) {
    return event.year >= YEAR_RANGE.start && event.year <= YEAR_RANGE.end;
  }

  function getYearBounds() {
    let minYear = Infinity;
    let maxYear = -Infinity;

    getEnabledTimelines().forEach(function (timeline) {
      timeline.events.forEach(function (event) {
        if (!isVisibleEvent(event)) {
          return;
        }
        minYear = Math.min(minYear, event.year);
        maxYear = Math.max(maxYear, event.year);
      });
    });

    if (!Number.isFinite(minYear)) {
      return {
        minYear: YEAR_RANGE.start,
        maxYear: YEAR_RANGE.end,
      };
    }

    const padding = Math.max(10, Math.round((maxYear - minYear) * 0.05));
    return {
      minYear: minYear - padding,
      maxYear: maxYear + padding,
    };
  }

  function yearToPercent(year, minYear, maxYear) {
    if (maxYear === minYear) {
      return 50;
    }
    return ((year - minYear) / (maxYear - minYear)) * 100;
  }

  function assignEventRows(items, minGapPercent) {
    const sorted = [...items].sort(function (a, b) {
      return a.left - b.left || a.event.title.localeCompare(b.event.title);
    });

    const rows = [];
    let maxRow = 0;

    sorted.forEach(function (item) {
      let row = 0;

      while (true) {
        if (!rows[row]) {
          rows[row] = [];
        }

        const hasOverlap = rows[row].some(function (left) {
          return Math.abs(left - item.left) < minGapPercent;
        });

        if (!hasOverlap) {
          rows[row].push(item.left);
          item.event._row = row;
          maxRow = Math.max(maxRow, row);
          break;
        }

        row += 1;
      }
    });

    return maxRow + 1;
  }

  function applyEventPlacement(marker, row) {
    if (row === 0) {
      marker.classList.add("timeline-event-on-line");
      return;
    }

    if (row % 2 === 1) {
      marker.classList.add("timeline-event-above");
      marker.style.setProperty("--stack-offset", String(Math.ceil(row / 2)));
      return;
    }

    marker.classList.add("timeline-event-below");
    marker.style.setProperty("--stack-offset", String(row / 2));
  }

  function applyCustomEventPlacement(marker, row) {
    if (row === 0) {
      marker.classList.add("timeline-event-on-line");
      return;
    }

    marker.classList.add("timeline-event-below");
    marker.style.setProperty("--stack-offset", String(row));
  }

  function getActiveEvents(bounds) {
    const events = [];

    getEnabledTimelines().forEach(function (timeline) {
      timeline.events.forEach(function (event) {
        if (!isVisibleEvent(event)) {
          return;
        }
        events.push({
          event: event,
          timeline: timeline,
          left: yearToPercent(event.year, bounds.minYear, bounds.maxYear),
        });
      });
    });

    return events;
  }

  function applyChartEventAlignment(marker) {
    marker.classList.remove(
      "timeline-chart-event--align-start",
      "timeline-chart-event--align-end"
    );

    const track = marker.closest(".timeline-lane-track");
    if (!track) {
      return;
    }

    const trackWidth = track.clientWidth;
    if (!trackWidth) {
      return;
    }

    const leftPercent = parseFloat(marker.style.left);
    const cardWidth = getTimelineCardWidth();
    const anchorPx = (leftPercent / 100) * trackWidth;
    const halfCard = cardWidth / 2;

    if (anchorPx < halfCard) {
      marker.classList.add("timeline-chart-event--align-start");
    } else if (anchorPx > trackWidth - halfCard) {
      marker.classList.add("timeline-chart-event--align-end");
    }
  }

  function getTimelineCardWidth() {
    const frame = document.querySelector(".timeline-visual-frame");
    if (!frame) {
      return 224;
    }

    const cardWidthValue =
      getComputedStyle(frame).getPropertyValue("--timeline-card-width").trim() ||
      "14rem";
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:absolute;visibility:hidden;width:" + cardWidthValue;
    frame.appendChild(probe);
    const width = probe.offsetWidth;
    probe.remove();
    return width;
  }

  function refreshChartEventAlignments() {
    if (!chartEl) {
      return;
    }

    chartEl.querySelectorAll(".timeline-chart-event").forEach(function (marker) {
      applyChartEventAlignment(marker);
    });
  }

  function bindEventMarker(marker, timeline, event) {
    if (isEventSelected(timeline, event)) {
      marker.classList.add("is-selected");
    }

    const dot = marker.querySelector(".timeline-event-dot");

    function openCard() {
      marker.classList.add("is-card-open");
    }

    function closeCard() {
      marker.classList.remove("is-card-open");
    }

    if (dot) {
      dot.addEventListener("mouseenter", openCard);
      dot.addEventListener("mouseleave", closeCard);
    }

    marker.addEventListener("focus", openCard);
    marker.addEventListener("blur", closeCard);

    marker.addEventListener("click", function () {
      toggleEventSelection(timeline, event);
      marker.classList.toggle("is-selected", isEventSelected(timeline, event));
    });
  }

  function buildAxisTicks(minYear, maxYear) {
    const span = maxYear - minYear;
    let step = 100;
    if (span <= 250) {
      step = 25;
    } else if (span <= 500) {
      step = 50;
    }

    const start = Math.ceil(minYear / step) * step;
    const ticks = [];
    for (let year = start; year <= maxYear; year += step) {
      ticks.push(year);
    }
    return ticks;
  }

  function renderFilters() {
    if (!filtersEl) {
      return;
    }

    filtersEl.innerHTML = "";

    TIMELINES.forEach(function (timeline) {
      const label = document.createElement("label");
      label.className = "timeline-toggle";
      label.style.setProperty("--timeline-color", timeline.color);

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = enabled[timeline.id];
      input.addEventListener("change", function () {
        enabled[timeline.id] = input.checked;
        saveEnabledState();
        renderAll();
      });

      const swatch = document.createElement("span");
      swatch.className = "timeline-toggle-swatch";
      swatch.setAttribute("aria-hidden", "true");

      const text = document.createElement("span");
      text.className = "timeline-toggle-label";
      text.textContent = timeline.name;

      label.appendChild(input);
      label.appendChild(swatch);
      label.appendChild(text);
      filtersEl.appendChild(label);
    });
  }

  function renderChart() {
    if (!chartEl) {
      return;
    }

    const active = getEnabledTimelines();
    chartEl.innerHTML = "";

    if (active.length === 0) {
      chartEl.innerHTML =
        '<p class="timeline-empty">Enable at least one timeline to view events.</p>';
      if (rangeSummaryEl) {
        rangeSummaryEl.textContent = "";
      }
      return;
    }

    const bounds = getYearBounds();
    const activeEvents = getActiveEvents(bounds);

    if (activeEvents.length === 0) {
      chartEl.innerHTML =
        '<p class="timeline-empty">No events between 1800 and 2020 for the enabled timelines.</p>';
      if (rangeSummaryEl) {
        rangeSummaryEl.textContent = "No matching events";
      }
      return;
    }

    const ticks = buildAxisTicks(bounds.minYear, bounds.maxYear);

    if (rangeSummaryEl) {
      rangeSummaryEl.textContent =
        active.length +
        " timeline" +
        (active.length === 1 ? "" : "s") +
        " enabled · " +
        activeEvents.length +
        " event" +
        (activeEvents.length === 1 ? "" : "s");
    }

    const axis = document.createElement("div");
    axis.className = "timeline-axis";
    axis.setAttribute("aria-hidden", "true");

    ticks.forEach(function (year) {
      const tick = document.createElement("div");
      tick.className = "timeline-axis-tick";
      tick.style.left = yearToPercent(year, bounds.minYear, bounds.maxYear) + "%";

      const label = document.createElement("span");
      label.textContent = String(year);
      tick.appendChild(label);
      axis.appendChild(tick);
    });

    chartEl.appendChild(axis);

    const lanes = document.createElement("div");
    lanes.className = "timeline-lanes";

    active.forEach(function (timeline) {
      const items = timeline.events
        .filter(isVisibleEvent)
        .map(function (event) {
          return {
            event: event,
            timeline: timeline,
            left: yearToPercent(event.year, bounds.minYear, bounds.maxYear),
          };
        });

      if (items.length === 0) {
        return;
      }

      assignEventRows(items, 5);

      const maxRow = items.reduce(function (max, item) {
        return Math.max(max, item.event._row || 0);
      }, 0);

      const lane = document.createElement("div");
      lane.className = "timeline-lane";
      lane.style.setProperty("--timeline-color", timeline.color);

      const laneLabel = document.createElement("div");
      laneLabel.className = "timeline-lane-label";
      laneLabel.textContent = timeline.name;

      const track = document.createElement("div");
      track.className = "timeline-lane-track";
      track.style.setProperty("--stack-rows", String(maxRow));

      const line = document.createElement("div");
      line.className = "timeline-line";
      line.setAttribute("aria-hidden", "true");
      track.appendChild(line);

      items.forEach(function (item) {
        const marker = document.createElement("button");
        marker.type = "button";
        marker.className = "timeline-event timeline-chart-event";
        marker.style.left = item.left + "%";
        marker.style.setProperty("--timeline-color", timeline.color);
        applyEventPlacement(marker, item.event._row || 0);
        marker.setAttribute(
          "aria-label",
          timeline.name + ", " + item.event.year + ": " + item.event.title
        );

        const dot = document.createElement("span");
        dot.className = "timeline-event-dot";
        dot.setAttribute("aria-hidden", "true");

        const year = document.createElement("span");
        year.className = "timeline-event-year";
        year.textContent = String(item.event.year);

        const card = document.createElement("div");
        card.className = "timeline-event-card";
        card.setAttribute("aria-hidden", "true");

        const cardYear = document.createElement("span");
        cardYear.className = "timeline-event-year";
        cardYear.textContent = String(item.event.year);

        const title = document.createElement("span");
        title.className = "timeline-event-title";
        title.textContent = item.event.title;

        const detail = document.createElement("span");
        detail.className = "timeline-event-detail";
        detail.textContent = item.event.detail;

        card.appendChild(cardYear);
        card.appendChild(title);
        card.appendChild(detail);

        marker.appendChild(dot);
        marker.appendChild(year);
        marker.appendChild(card);
        bindEventMarker(marker, timeline, item.event);
        track.appendChild(marker);
      });

      lane.appendChild(laneLabel);
      lane.appendChild(track);
      lanes.appendChild(lane);
    });

    chartEl.appendChild(lanes);
    refreshChartEventAlignments();
  }

  function renderCustomTimeline() {
    if (!customChartEl) {
      return;
    }

    const items = getSelectedEventItems();
    customChartEl.innerHTML = "";

    if (customSummaryEl) {
      if (items.length === 0) {
        customSummaryEl.textContent =
          "Click events above to build a single timeline here.";
      } else {
        customSummaryEl.textContent =
          items.length +
          " event" +
          (items.length === 1 ? "" : "s") +
          " on your timeline.";
      }
    }

    if (items.length === 0) {
      customChartEl.innerHTML =
        '<p class="timeline-empty">No events selected yet.</p>';
      return;
    }

    const bounds = getCustomTimelineBounds(items);
    const ticks = buildAxisTicks(bounds.minYear, bounds.maxYear);

    const axis = document.createElement("div");
    axis.className = "timeline-axis timeline-custom-axis";
    axis.setAttribute("aria-hidden", "true");

    ticks.forEach(function (year) {
      const tick = document.createElement("div");
      tick.className = "timeline-axis-tick";
      tick.style.left = yearToPercent(year, bounds.minYear, bounds.maxYear) + "%";

      const label = document.createElement("span");
      label.textContent = String(year);
      tick.appendChild(label);
      axis.appendChild(tick);
    });

    customChartEl.appendChild(axis);

    const mappedItems = items.map(function (item) {
      return {
        event: item.event,
        timeline: item.timeline,
        left: yearToPercent(item.event.year, bounds.minYear, bounds.maxYear),
      };
    });

    assignEventRows(mappedItems, 6);

    const maxRow = mappedItems.reduce(function (max, item) {
      return Math.max(max, item.event._row || 0);
    }, 0);

    const track = document.createElement("div");
    track.className = "timeline-lane-track timeline-custom-track";
    track.style.setProperty("--stack-rows", String(maxRow));

    const line = document.createElement("div");
    line.className = "timeline-line timeline-custom-line";
    line.setAttribute("aria-hidden", "true");
    track.appendChild(line);

    mappedItems.forEach(function (item) {
      const marker = document.createElement("div");
      marker.className = "timeline-event timeline-custom-event";
      marker.style.left = item.left + "%";
      marker.style.setProperty("--timeline-color", item.timeline.color);
      applyCustomEventPlacement(marker, item.event._row || 0);

      const dot = document.createElement("span");
      dot.className = "timeline-event-dot";
      dot.setAttribute("aria-hidden", "true");

      const year = document.createElement("span");
      year.className = "timeline-event-year";
      year.textContent = String(item.event.year);

      const title = document.createElement("span");
      title.className = "timeline-custom-event-title";
      title.textContent = item.event.title;

      marker.appendChild(dot);
      marker.appendChild(year);
      marker.appendChild(title);
      track.appendChild(marker);
    });

    customChartEl.appendChild(track);
  }

  function renderAll() {
    renderFilters();
    renderChart();
    renderCustomTimeline();
  }

  function setAllEnabled(value) {
    TIMELINES.forEach(function (timeline) {
      enabled[timeline.id] = value;
    });
    saveEnabledState();
    renderAll();
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", function () {
      setAllEnabled(true);
    });
  }

  if (hideAllBtn) {
    hideAllBtn.addEventListener("click", function () {
      setAllEnabled(false);
    });
  }

  if (customClearBtn) {
    customClearBtn.addEventListener("click", function () {
      selectedEvents.clear();
      document
        .querySelectorAll(".timeline-event.is-selected")
        .forEach(function (marker) {
          marker.classList.remove("is-selected");
        });
      renderCustomTimeline();
    });
  }

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshChartEventAlignments, 150);
  });

  renderAll();
})();
