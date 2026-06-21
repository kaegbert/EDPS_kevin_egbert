(function () {
  "use strict";

  const STORAGE_SAVED = "haiku-maker-saved";
  const STORAGE_CUSTOM = "haiku-maker-custom-words";

  const WORD_POOL = [
    { text: "quiet", syllables: 2 },
    { text: "moon", syllables: 1 },
    { text: "wind", syllables: 1 },
    { text: "rain", syllables: 1 },
    { text: "snow", syllables: 1 },
    { text: "soft", syllables: 1 },
    { text: "cold", syllables: 1 },
    { text: "warm", syllables: 1 },
    { text: "cherry", syllables: 2 },
    { text: "blossom", syllables: 2 },
    { text: "petals", syllables: 2 },
    { text: "morning", syllables: 2 },
    { text: "evening", syllables: 3 },
    { text: "river", syllables: 2 },
    { text: "pond", syllables: 1 },
    { text: "frog", syllables: 1 },
    { text: "cricket", syllables: 2 },
    { text: "ancient", syllables: 2 },
    { text: "lonely", syllables: 2 },
    { text: "gentle", syllables: 2 },
    { text: "drifts", syllables: 1 },
    { text: "whispers", syllables: 2 },
    { text: "through", syllables: 1 },
    { text: "beneath", syllables: 2 },
    { text: "beyond", syllables: 2 },
    { text: "still", syllables: 1 },
    { text: "stone", syllables: 1 },
    { text: "path", syllables: 1 },
    { text: "light", syllables: 1 },
    { text: "mist", syllables: 1 },
    { text: "summer", syllables: 2 },
    { text: "winter", syllables: 2 },
    { text: "waiting", syllables: 2 },
    { text: "passing", syllables: 2 },
    { text: "golden", syllables: 2 },
    { text: "garden", syllables: 2 },
    { text: "bamboo", syllables: 2 },
    { text: "maple", syllables: 2 },
    { text: "cicada", syllables: 3 },
    { text: "dragonfly", syllables: 3 },
    { text: "mountain", syllables: 2 },
    { text: "shadow", syllables: 2 },
    { text: "twilight", syllables: 2 },
    { text: "falling", syllables: 2 },
    { text: "rising", syllables: 2 },
    { text: "deep", syllables: 1 },
    { text: "bright", syllables: 1 },
    { text: "old", syllables: 1 },
    { text: "new", syllables: 1 },
    { text: "a", syllables: 1 },
    { text: "the", syllables: 1 },
  ];

  const SYLLABLE_LOOKUP = WORD_POOL.reduce(function (lookup, entry) {
    lookup[entry.text.toLowerCase()] = entry.syllables;
    return lookup;
  }, {});

  const EXTRA_SYLLABLES = {
    beautiful: 3,
    every: 2,
    everyone: 3,
    everything: 3,
    everywhere: 3,
    area: 3,
    hour: 1,
    flower: 2,
    firefly: 2,
    butterfly: 3,
    dragonfly: 3,
    moonlight: 2,
    starlight: 2,
    sunlight: 2,
    daylight: 2,
    sunset: 2,
    sunrise: 2,
    raindrop: 2,
    snowflake: 2,
    waterfall: 3,
    fireplace: 2,
    daybreak: 2,
    outside: 2,
    inside: 2,
    purple: 2,
    orange: 2,
    yellow: 2,
    silver: 2,
    golden: 2,
    autumn: 2,
    spring: 1,
    summer: 2,
    winter: 2,
    meadow: 2,
    willow: 2,
    stream: 1,
    ocean: 2,
    ripple: 2,
    thunder: 2,
    lightning: 2,
    softly: 2,
    slowly: 2,
    quietly: 3,
    deeply: 2,
    gently: 2,
    lonely: 2,
    poetry: 3,
    haiku: 2,
    understand: 3,
    together: 3,
    remember: 3,
    little: 2,
    people: 2,
    circle: 2,
    table: 2,
    turtle: 2,
    simple: 2,
    gentle: 2,
    quiet: 2,
    fire: 1,
    water: 2,
    earth: 1,
    spirit: 2,
    temple: 2,
    lantern: 2,
    horizon: 3,
    silence: 2,
    breathing: 2,
    floating: 2,
    drifting: 2,
    shimmering: 3,
    glistening: 2,
    morning: 2,
    evening: 3,
    cricket: 2,
    cicada: 3,
    dragon: 2,
    blossom: 2,
    petals: 2,
    cherry: 2,
    maple: 2,
    bamboo: 2,
    garden: 2,
    mountain: 2,
    valley: 2,
    forest: 2,
    river: 2,
    pond: 1,
    frog: 1,
    firework: 3,
    fireflies: 3,
    reeds: 1,
    breeze: 1,
    crystal: 2,
    diamond: 3,
    emerald: 3,
    sapphire: 2,
    ruby: 2,
    amber: 2,
    crimson: 2,
    scarlet: 2,
    violet: 3,
    indigo: 3,
    turquoise: 2,
  };

  Object.keys(EXTRA_SYLLABLES).forEach(function (word) {
    SYLLABLE_LOOKUP[word] = EXTRA_SYLLABLES[word];
  });

  const wordBank = document.getElementById("word-bank");
  const haikuLines = document.querySelectorAll(".haiku-line");
  const statusEl = document.getElementById("haiku-status");
  const clearBtn = document.getElementById("haiku-clear");
  const shuffleBtn = document.getElementById("haiku-shuffle");
  const saveBtn = document.getElementById("haiku-save");
  const addWordForm = document.getElementById("haiku-add-word");
  const wordInput = document.getElementById("haiku-word-input");
  const syllablePreview = document.getElementById("haiku-syllable-preview");
  const savedList = document.getElementById("saved-haikus");
  const savedEmpty = document.getElementById("saved-haikus-empty");

  let draggedWord = null;
  let wordCounter = 0;

  function readStorage(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  }

  function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function loadCustomWords() {
    const stored = readStorage(STORAGE_CUSTOM);
    const updated = stored.map(function (entry) {
      return {
        text: entry.text,
        syllables: countWordSyllables(entry.text),
      };
    });

    if (
      JSON.stringify(stored) !== JSON.stringify(updated) &&
      updated.length > 0
    ) {
      saveCustomWords(updated);
    }

    return updated;
  }

  function saveCustomWords(words) {
    writeStorage(STORAGE_CUSTOM, words);
  }

  function loadSavedHaikus() {
    return readStorage(STORAGE_SAVED);
  }

  function saveSavedHaikus(haikus) {
    writeStorage(STORAGE_SAVED, haikus);
  }

  function normalizeWord(text) {
    return text.trim().toLowerCase();
  }

  function countSyllablesInWord(word) {
    let cleaned = word.toLowerCase().replace(/[^a-z']/g, "");
    if (!cleaned) {
      return 0;
    }
    if (cleaned.length <= 2) {
      return 1;
    }

    const endsInLe =
      cleaned.endsWith("le") &&
      cleaned.length > 2 &&
      !/[aeiouy]/.test(cleaned[cleaned.length - 3]);

    if (!endsInLe) {
      cleaned = cleaned.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
    } else {
      cleaned = cleaned.replace(/(?:[^laeiouy]es|ed)$/, "");
    }

    cleaned = cleaned.replace(/^y/, "");

    const groups = cleaned.match(/[aeiouy]{1,2}/g);
    let count = groups ? groups.length : 1;

    if (endsInLe && count === 1) {
      count = 2;
    }

    return Math.max(1, count);
  }

  function countWordSyllables(text) {
    const cleaned = text.trim();
    if (!cleaned) {
      return 0;
    }

    if (/\s/.test(cleaned)) {
      return 0;
    }

    const normalized = normalizeWord(cleaned);

    if (SYLLABLE_LOOKUP[normalized] !== undefined) {
      return SYLLABLE_LOOKUP[normalized];
    }

    if (normalized.includes("-")) {
      return normalized.split("-").reduce(function (total, part) {
        return total + countWordSyllables(part);
      }, 0);
    }

    return countSyllablesInWord(normalized);
  }

  function refreshWordSyllable(wordEl) {
    const count = countWordSyllables(wordEl.textContent);
    wordEl.dataset.syllables = String(count);
  }

  function refreshAllWordSyllables() {
    document.querySelectorAll(".haiku-word").forEach(refreshWordSyllable);
    updateAll();
  }

  function formatSyllableLabel(count) {
    return count + " syllable" + (count === 1 ? "" : "s");
  }

  function updateSyllablePreview() {
    if (!syllablePreview || !wordInput) {
      return;
    }

    const text = wordInput.value.trim();
    if (!text) {
      syllablePreview.textContent = "";
      return;
    }

    if (/\s/.test(text)) {
      syllablePreview.textContent = "Use one word at a time.";
      return;
    }

    const count = countWordSyllables(text);
    if (count < 1) {
      syllablePreview.textContent = "Enter a valid word.";
      return;
    }

    syllablePreview.textContent = formatSyllableLabel(count) + " detected";
  }

  function wordExistsInBank(text) {
    const normalized = normalizeWord(text);
    return [...wordBank.querySelectorAll(".haiku-word")].some(function (word) {
      return normalizeWord(word.textContent) === normalized;
    });
  }

  function createWordElement(text, syllables, isCustom) {
    const word = document.createElement("span");
    word.className = "haiku-word" + (isCustom ? " haiku-word-custom" : "");
    word.draggable = true;
    word.textContent = text;
    word.dataset.syllables = String(syllables);
    word.dataset.wordId = "word-" + wordCounter++;
    word.setAttribute("role", "button");
    word.setAttribute("tabindex", "0");
    word.setAttribute("aria-grabbed", "false");

    word.addEventListener("dragstart", onDragStart);
    word.addEventListener("dragend", onDragEnd);

    return word;
  }

  function onDragStart(event) {
    draggedWord = event.currentTarget;
    draggedWord.classList.add("is-dragging");
    draggedWord.setAttribute("aria-grabbed", "true");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedWord.dataset.wordId);
  }

  function onDragEnd() {
    if (!draggedWord) {
      return;
    }
    draggedWord.classList.remove("is-dragging");
    draggedWord.setAttribute("aria-grabbed", "false");
    draggedWord = null;
    clearDropHighlights();
    updateAll();
  }

  function getDropZones() {
    return [wordBank, ...haikuLines];
  }

  function clearDropHighlights() {
    getDropZones().forEach(function (zone) {
      zone.classList.remove("drag-over");
    });
  }

  function getInsertBeforeElement(container, x) {
    const words = [...container.querySelectorAll(".haiku-word:not(.is-dragging)")];

    return words.reduce(
      function (closest, child) {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        }
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  }

  function initDropZone(zone) {
    zone.addEventListener("dragover", function (event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      zone.classList.add("drag-over");

      if (!draggedWord) {
        return;
      }

      const insertBefore = getInsertBeforeElement(zone, event.clientX);
      if (insertBefore) {
        zone.insertBefore(draggedWord, insertBefore);
      } else {
        zone.appendChild(draggedWord);
      }
    });

    zone.addEventListener("dragleave", function (event) {
      if (!zone.contains(event.relatedTarget)) {
        zone.classList.remove("drag-over");
      }
    });

    zone.addEventListener("drop", function (event) {
      event.preventDefault();
      zone.classList.remove("drag-over");
      updateAll();
    });
  }

  function countLineSyllables(line) {
    const words = line.querySelectorAll(".haiku-word");
    let total = 0;
    words.forEach(function (word) {
      total += Number(word.dataset.syllables);
    });
    return total;
  }

  function getLineText(line) {
    return [...line.querySelectorAll(".haiku-word")]
      .map(function (word) {
        return word.textContent;
      })
      .join(" ");
  }

  function getHaikuLines() {
    return [...haikuLines].map(getLineText);
  }

  function isHaikuComplete() {
    const anyWords = [...haikuLines].some(function (line) {
      return line.querySelector(".haiku-word");
    });

    if (!anyWords) {
      return false;
    }

    return [...haikuLines].every(function (line) {
      const target = Number(line.dataset.targetSyllables);
      return countLineSyllables(line) === target;
    });
  }

  function updateLineCounts() {
    haikuLines.forEach(function (line) {
      const target = Number(line.dataset.targetSyllables);
      const count = countLineSyllables(line);
      const row = line.closest(".haiku-line-row");
      const countEl = row ? row.querySelector(".haiku-line-count") : null;
      if (!countEl) {
        return;
      }
      const isComplete = count === target;

      countEl.textContent = count + " / " + target;
      countEl.classList.toggle("is-complete", isComplete);
      countEl.classList.toggle("is-over", count > target);
      line.classList.toggle("is-empty", count === 0);
    });
  }

  function updateStatus() {
    const complete = isHaikuComplete();
    const anyWords = [...haikuLines].some(function (line) {
      return line.querySelector(".haiku-word");
    });

    if (saveBtn) {
      saveBtn.disabled = !complete;
    }

    if (complete) {
      statusEl.textContent =
        "Your haiku fits 5-7-5 — save it or keep editing.";
      statusEl.className = "haiku-status is-success";
      return;
    }

    if (anyWords) {
      statusEl.textContent =
        "Keep arranging words until each line matches its syllable count.";
      statusEl.className = "haiku-status is-progress";
      return;
    }

    statusEl.textContent = "Drag words from the bank into the three lines below.";
    statusEl.className = "haiku-status";
  }

  function updateAll() {
    updateLineCounts();
    updateStatus();
  }

  function clearHaikuLines() {
    haikuLines.forEach(function (line) {
      const words = [...line.querySelectorAll(".haiku-word")];
      words.forEach(function (word) {
        wordBank.appendChild(word);
      });
    });
    updateAll();
  }

  function fillWordBank() {
    const customWords = loadCustomWords();
    const shuffled = [...WORD_POOL].sort(function () {
      return Math.random() - 0.5;
    });
    const selected = shuffled.slice(0, 20);

    wordBank.innerHTML = "";
    selected.forEach(function (entry) {
      wordBank.appendChild(createWordElement(entry.text, entry.syllables, false));
    });

    customWords.forEach(function (entry) {
      if (!wordExistsInBank(entry.text)) {
        wordBank.appendChild(
          createWordElement(entry.text, entry.syllables, true)
        );
      }
    });

    updateAll();
  }

  function shuffleWordBank() {
    clearHaikuLines();
    fillWordBank();
  }

  function addCustomWord(text) {
    const cleaned = text.trim();

    if (!cleaned) {
      statusEl.textContent = "Enter a word to add.";
      statusEl.className = "haiku-status is-progress";
      return false;
    }

    if (/\s/.test(cleaned)) {
      statusEl.textContent = "Add one word at a time.";
      statusEl.className = "haiku-status is-progress";
      return false;
    }

    const count = countWordSyllables(cleaned);
    if (count < 1) {
      statusEl.textContent = "Enter a valid word.";
      statusEl.className = "haiku-status is-progress";
      return false;
    }

    if (wordExistsInBank(cleaned)) {
      statusEl.textContent = '"' + cleaned + '" is already in the word bank.';
      statusEl.className = "haiku-status is-progress";
      return false;
    }

    const customWords = loadCustomWords();
    customWords.push({ text: cleaned, syllables: count });
    saveCustomWords(customWords);

    const wordEl = createWordElement(cleaned, count, true);
    wordBank.appendChild(wordEl);
    updateAll();

    statusEl.textContent =
      'Added "' + cleaned + '" (' + formatSyllableLabel(count) + ") to the word bank.";
    statusEl.className = "haiku-status is-success";
    wordBank.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return true;
  }

  function saveCurrentHaiku() {
    if (!isHaikuComplete()) {
      return;
    }

    const lines = getHaikuLines();
    const haikus = loadSavedHaikus();
    haikus.unshift({
      id: "haiku-" + Date.now(),
      lines: lines,
      savedAt: new Date().toISOString(),
    });
    saveSavedHaikus(haikus);
    renderSavedHaikus();
    statusEl.textContent = "Haiku saved.";
    statusEl.className = "haiku-status is-success";
  }

  function deleteSavedHaiku(id) {
    const haikus = loadSavedHaikus().filter(function (entry) {
      return entry.id !== id;
    });
    saveSavedHaikus(haikus);
    renderSavedHaikus();
  }

  function formatSavedDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  function renderSavedHaikus() {
    if (!savedList || !savedEmpty) {
      return;
    }

    const haikus = loadSavedHaikus();
    savedList.innerHTML = "";

    haikus.forEach(function (entry) {
      const item = document.createElement("li");
      item.className = "saved-haiku";

      const text = document.createElement("blockquote");
      text.className = "saved-haiku-text";
      entry.lines.forEach(function (line) {
        const lineEl = document.createElement("p");
        lineEl.textContent = line;
        text.appendChild(lineEl);
      });

      const meta = document.createElement("div");
      meta.className = "saved-haiku-meta";

      const date = document.createElement("time");
      date.className = "saved-haiku-date";
      date.dateTime = entry.savedAt;
      date.textContent = formatSavedDate(entry.savedAt);

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "saved-haiku-delete";
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", function () {
        deleteSavedHaiku(entry.id);
      });

      meta.appendChild(date);
      meta.appendChild(deleteBtn);
      item.appendChild(text);
      item.appendChild(meta);
      savedList.appendChild(item);
    });

    savedEmpty.hidden = haikus.length > 0;
  }

  getDropZones().forEach(initDropZone);

  if (clearBtn) {
    clearBtn.addEventListener("click", clearHaikuLines);
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", shuffleWordBank);
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", saveCurrentHaiku);
  }

  if (addWordForm) {
    addWordForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const added = addCustomWord(wordInput.value);
      if (added) {
        wordInput.value = "";
        updateSyllablePreview();
        wordInput.focus();
      }
    });
  }

  if (wordInput) {
    wordInput.addEventListener("input", updateSyllablePreview);
  }

  fillWordBank();
  refreshAllWordSyllables();
  renderSavedHaikus();
})();
