(function () {
  "use strict";

  const STORAGE_BEST = "math-game-best-scores";
  const TOTAL_ROUNDS = 10;

  const LEVELS = {
    easy: {
      label: "Easy",
      max: 12,
      operations: ["+", "-"],
    },
    medium: {
      label: "Medium",
      max: 25,
      operations: ["+", "-"],
    },
    hard: {
      label: "Hard",
      max: 12,
      operations: ["+", "-", "×"],
    },
  };

  const setupEl = document.getElementById("math-setup");
  const playEl = document.getElementById("math-play");
  const resultsEl = document.getElementById("math-results");
  const bestScoresEl = document.getElementById("math-best-scores");
  const progressEl = document.getElementById("math-progress");
  const scoreEl = document.getElementById("math-score");
  const questionEl = document.getElementById("math-question");
  const choicesEl = document.getElementById("math-choices");
  const feedbackEl = document.getElementById("math-feedback");
  const finalScoreEl = document.getElementById("math-final-score");
  const finalBestEl = document.getElementById("math-final-best");
  const playAgainBtn = document.getElementById("math-play-again");
  const changeLevelBtn = document.getElementById("math-change-level");

  let level = "easy";
  let round = 0;
  let score = 0;
  let currentAnswer = null;
  let acceptingAnswers = true;

  function loadBestScores() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_BEST) || "{}");
    } catch (error) {
      return {};
    }
  }

  function saveBestScores(scores) {
    localStorage.setItem(STORAGE_BEST, JSON.stringify(scores));
  }

  function getBestScore(levelId) {
    const scores = loadBestScores();
    return Number.isFinite(scores[levelId]) ? scores[levelId] : null;
  }

  function updateBestScore(levelId, nextScore) {
    const scores = loadBestScores();
    const currentBest = getBestScore(levelId);

    if (currentBest === null || nextScore > currentBest) {
      scores[levelId] = nextScore;
      saveBestScores(scores);
      return true;
    }

    return false;
  }

  function renderBestScores() {
    if (!bestScoresEl) {
      return;
    }

    const parts = Object.keys(LEVELS).map(function (levelId) {
      const best = getBestScore(levelId);
      const label = LEVELS[levelId].label;

      if (best === null) {
        return label + ": no best score yet";
      }

      return label + ": " + best + " / " + TOTAL_ROUNDS;
    });

    bestScoresEl.textContent = "Best scores — " + parts.join(" · ");
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function buildQuestion(levelId) {
    const config = LEVELS[levelId];
    const operation =
      config.operations[randomInt(0, config.operations.length - 1)];
    let left = randomInt(1, config.max);
    let right = randomInt(1, config.max);
    let answer = 0;

    if (operation === "+") {
      answer = left + right;
    } else if (operation === "-") {
      if (right > left) {
        const swap = left;
        left = right;
        right = swap;
      }
      answer = left - right;
    } else {
      answer = left * right;
    }

    return {
      text: String(left) + " " + operation + " " + String(right) + " = ?",
      answer: answer,
    };
  }

  function shuffle(items) {
    const copy = items.slice();

    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = randomInt(0, index);
      const temp = copy[index];
      copy[index] = copy[swapIndex];
      copy[swapIndex] = temp;
    }

    return copy;
  }

  function buildChoices(answer) {
    const choices = new Set([answer]);

    while (choices.size < 4) {
      const offset = randomInt(-9, 9);

      if (offset === 0) {
        continue;
      }

      const candidate = answer + offset;

      if (candidate >= 0) {
        choices.add(candidate);
      }
    }

    return shuffle(Array.from(choices));
  }

  function setFeedback(message, state) {
    if (!feedbackEl) {
      return;
    }

    feedbackEl.textContent = message;
    feedbackEl.classList.remove("is-correct", "is-wrong");

    if (state) {
      feedbackEl.classList.add(state);
    }
  }

  function showPanel(panel) {
    if (setupEl) {
      setupEl.hidden = panel !== "setup";
    }

    if (playEl) {
      playEl.hidden = panel !== "play";
    }

    if (resultsEl) {
      resultsEl.hidden = panel !== "results";
    }
  }

  function renderQuestion() {
    round += 1;
    const question = buildQuestion(level);
    currentAnswer = question.answer;

    if (questionEl) {
      questionEl.textContent = question.text;
    }

    if (progressEl) {
      progressEl.textContent =
        "Question " + round + " of " + TOTAL_ROUNDS;
    }

    if (scoreEl) {
      scoreEl.textContent = "Score: " + score;
    }

    if (!choicesEl) {
      return;
    }

    choicesEl.innerHTML = "";
    acceptingAnswers = true;
    setFeedback("", null);

    buildChoices(question.answer).forEach(function (choice) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "math-choice";
      button.textContent = String(choice);
      button.addEventListener("click", function () {
        handleAnswer(choice, button);
      });
      choicesEl.appendChild(button);
    });
  }

  function disableChoices() {
    if (!choicesEl) {
      return;
    }

    choicesEl.querySelectorAll(".math-choice").forEach(function (button) {
      button.disabled = true;
    });
  }

  function handleAnswer(choice, button) {
    if (!acceptingAnswers) {
      return;
    }

    acceptingAnswers = false;
    disableChoices();

    const isCorrect = choice === currentAnswer;

    if (isCorrect) {
      score += 1;
      button.classList.add("is-correct");
      setFeedback("Correct.", "is-correct");
    } else {
      button.classList.add("is-wrong");
      setFeedback("Not quite — the answer was " + currentAnswer + ".", "is-wrong");

      choicesEl.querySelectorAll(".math-choice").forEach(function (choiceButton) {
        if (Number(choiceButton.textContent) === currentAnswer) {
          choiceButton.classList.add("is-correct");
        }
      });
    }

    if (scoreEl) {
      scoreEl.textContent = "Score: " + score;
    }

    window.setTimeout(function () {
      if (round >= TOTAL_ROUNDS) {
        finishGame();
        return;
      }

      renderQuestion();
    }, 900);
  }

  function startGame(levelId) {
    level = levelId;
    round = 0;
    score = 0;
    showPanel("play");
    renderQuestion();
  }

  function finishGame() {
    const isNewBest = updateBestScore(level, score);
    const best = getBestScore(level);

    if (finalScoreEl) {
      finalScoreEl.textContent =
        score + " / " + TOTAL_ROUNDS + " on " + LEVELS[level].label;
    }

    if (finalBestEl) {
      if (isNewBest) {
        finalBestEl.textContent = "New best score for this level.";
      } else {
        finalBestEl.textContent = "Best on this level: " + best + " / " + TOTAL_ROUNDS + ".";
      }
    }

    renderBestScores();
    showPanel("results");
  }

  document.querySelectorAll("[data-level]").forEach(function (button) {
    button.addEventListener("click", function () {
      startGame(button.getAttribute("data-level"));
    });
  });

  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", function () {
      startGame(level);
    });
  }

  if (changeLevelBtn) {
    changeLevelBtn.addEventListener("click", function () {
      showPanel("setup");
      renderBestScores();
    });
  }

  renderBestScores();
  showPanel("setup");
})();
