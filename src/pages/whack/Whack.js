import React, { useEffect, useState } from "react";
import { user } from "./user";
import { wordList } from "./dictionary";

const dictionary = wordList;
const initialState = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentCol: 0,
  guessedWords: [], // Array to store guessed words
};

let currentUser;

function Whack() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    startup();
  }, []);

  function startup() {
    let username = localStorage.getItem("lastUsername");
    if (!username) {
      username = prompt("Enter your username:");
      if (username) {
        localStorage.setItem("lastUsername", username);
      } else {
        alert("Username is required to play the game.");
        return;
      }
    }

    currentUser = new user(username);
    drawGrid();
    drawKeyboard();
    registerKeyboardEvents();
    displayStats();

    document.getElementById("stats-button").onclick = () => {
      document.getElementById("stats-menu").classList.add("visible");
    };

    document.getElementById("close-stats-button").onclick = () => {
      document.getElementById("stats-menu").classList.remove("visible");
    };
  }

  function drawGrid() {
    const game = document.getElementById("game");
    game.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "grid";

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        drawBox(grid, i, j);
      }
    }

    game.appendChild(grid);
  }

  function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
      for (let j = 0; j < state.grid[i].length; j++) {
        const box = document.getElementById(`box${i}${j}`);
        box.textContent = state.grid[i][j];
      }
    }
  }

  function drawBox(container, row, col, letter = "") {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = letter;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
  }

  function drawKeyboard() {
    const keyboardContainer = document.getElementById("keyboard-container");
    keyboardContainer.innerHTML = "";
    const keyboardLayout = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    const keyboard = document.createElement("div");
    keyboard.className = "keyboard";

    keyboardLayout.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "keyboard-row";
      if (rowIndex === 2) {
        const enterKey = document.createElement("button");
        enterKey.className = "key special-key";
        enterKey.textContent = "Enter";
        enterKey.onclick = () => handleKeyClick("Enter");
        rowDiv.appendChild(enterKey);
      }
      row.split("").forEach((key) => {
        const keyDiv = document.createElement("button");
        keyDiv.className = "key";
        keyDiv.textContent = key;
        keyDiv.id = `key-${key}`;
        keyDiv.onclick = () => handleKeyClick(key);
        rowDiv.appendChild(keyDiv);
      });
      if (rowIndex === 2) {
        const backspaceKey = document.createElement("button");
        backspaceKey.className = "key special-key";
        backspaceKey.textContent = "<-";
        backspaceKey.onclick = () => handleKeyClick("Backspace");
        rowDiv.appendChild(backspaceKey);
      }
      keyboard.appendChild(rowDiv);
    });

    keyboardContainer.appendChild(keyboard);
  }

  function handleKeyClick(key) {
    if (key === "Enter") {
      if (state.currentCol === 5) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
          if (state.guessedWords.includes(word)) {
            alert("You have already guessed this word.");
          } else {
            state.guessedWords.push(word);
            currentUser.incrementTotalGuesses();
            revealWord(word);
            state.currentRow++;
            state.currentCol = 0;
          }
        } else {
          alert("Not a valid word.");
        }
      }
    } else if (key === "Backspace") {
      removeLetter();
    } else if (isLetter(key)) {
      addLetter(key);
    }

    updateGrid();
  }

  function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
      handleKeyClick(e.key);
    };
  }

  function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
  }

  function isWordValid(word) {
    return dictionary.includes(word);
  }

  function getNumOfOccurrencesInWord(word, letter) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        result++;
      }
    }
    return result;
  }

  function getPositionOfOccurrence(word, letter, position) {
    let result = 0;
    for (let i = 0; i <= position; i++) {
      if (word[i] === letter) {
        result++;
      }
    }
    return result;
  }

  function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // ms

    for (let i = 0; i < 5; i++) {
      const box = document.getElementById(`box${row}${i}`);
      const letter = box.textContent;
      const numOfOccurrencesSecret = getNumOfOccurrencesInWord(
        state.secret,
        letter
      );
      const numOfOccurrencesGuess = getNumOfOccurrencesInWord(guess, letter);
      const letterPosition = getPositionOfOccurrence(guess, letter, i);

      setTimeout(() => {
        if (
          numOfOccurrencesGuess > numOfOccurrencesSecret &&
          letterPosition > numOfOccurrencesSecret
        ) {
          box.classList.add("empty");
          updateKeyClass(letter, "empty");
        } else {
          if (letter === state.secret[i]) {
            box.classList.add("right");
            updateKeyClass(letter, "right");
          } else if (state.secret.includes(letter)) {
            box.classList.add("wrong");
            updateKeyClass(letter, "wrong");
          } else {
            box.classList.add("empty");
            updateKeyClass(letter, "empty");
          }
        }
      }, ((i + 1) * animation_duration) / 2);

      box.classList.add("animated");
      box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
      if (isWinner) {
        currentUser.updateStats(isWinner);
        alert("Congratulations!");
      } else if (isGameOver) {
        currentUser.updateStats(isWinner);
        alert(`Better luck next time! The word was ${state.secret}.`);
      }
      displayStats();
    }, 3 * animation_duration);
  }

  function updateKeyClass(key, className) {
    const keyElement = document.getElementById(`key-${key.toUpperCase()}`);
    if (keyElement && !keyElement.classList.contains("right")) {
      keyElement.classList.remove("empty", "wrong", "right");
      keyElement.classList.add(className);
    }
  }

  function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
  }

  function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
  }

  function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = "";
    state.currentCol--;
  }

  function displayStats() {
    const statsContainer = document.getElementById("stats-container");
    statsContainer.innerHTML = `
      <p>Total Guesses: ${currentUser.stats.totalGuesses}</p>
      <p>Games Played: ${currentUser.stats.gamesPlayed}</p>
      <p>Games Won: ${currentUser.stats.gamesWon}</p>
      <p>Current Streak: ${currentUser.stats.currentStreak}</p>
      <p>Max Streak: ${currentUser.stats.maxStreak}</p>
    `;
  }

  return (
    <div>
      <div id="game"></div>
      <div id="keyboard-container"></div>
      <button id="stats-button">Stats</button>
      <div id="stats-menu" className="stats-menu hidden">
        <div id="stats-container"></div>
        <button id="close-stats-button">Close</button>
      </div>
    </div>
  );
}

export default Whack;
