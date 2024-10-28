import React, { useEffect, useCallback } from 'react';
import { user } from './user';
import { wordList } from './dictionary';

const dictionary = wordList;

const state = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(6).fill().map(() => Array(5).fill('')),
  currentRow: 0,
  currentCol: 0,
  guessedWords: [],
};

let currentUser;

const Whack = () => {
  const drawGrid = useCallback((container) => {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        drawBox(grid, i, j);
      }
    }
    container.appendChild(grid);
  }, []);

  const drawKeyboard = useCallback((container) => {
    const keyboardLayout = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';

    keyboardLayout.forEach((row, rowIndex) => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'keyboard-row';

      if (rowIndex === 2) rowDiv.appendChild(createSpecialKey('Enter'));

      row.split('').forEach((key) => rowDiv.appendChild(createKeyButton(key)));

      if (rowIndex === 2) rowDiv.appendChild(createSpecialKey('Backspace', '<-'));

      keyboard.appendChild(rowDiv);
    });

    container.appendChild(keyboard);
  }, []);

  const registerKeyboardEvents = useCallback(() => {
    document.body.onkeydown = (e) => handleKeyClick(e.key);
  }, []);

  useEffect(() => {
    const startup = () => {
      let username = localStorage.getItem('lastUsername');
      if (!username) {
        username = prompt('Enter your username:');
        if (username) {
          localStorage.setItem('lastUsername', username);
        } else {
          alert('Username is required to play the game.');
          return;
        }
      }

      currentUser = new user(username);
      const game = document.getElementById('game');
      drawGrid(game);

      const keyboardContainer = document.getElementById('keyboard-container');
      drawKeyboard(keyboardContainer);

      registerKeyboardEvents();
      displayStats();
      setupStatsMenu();
    };

    startup();
  }, [drawGrid, drawKeyboard, registerKeyboardEvents]);

  function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;
    container.appendChild(box);
  }

  function createKeyButton(key) {
    const keyButton = document.createElement('button');
    keyButton.className = 'key';
    keyButton.textContent = key;
    keyButton.onclick = () => handleKeyClick(key);
    return keyButton;
  }

  function createSpecialKey(key, label = key) {
    const keyButton = document.createElement('button');
    keyButton.className = 'key special-key';
    keyButton.textContent = label;
    keyButton.onclick = () => handleKeyClick(key);
    return keyButton;
  }

  function handleKeyClick(key) {
    if (key === 'Enter') submitWord();
    else if (key === 'Backspace') removeLetter();
    else if (isLetter(key)) addLetter(key);

    updateGrid();
  }

  function submitWord() {
    if (state.currentCol === 5) {
      const word = getCurrentWord();
      if (isWordValid(word)) {
        if (!state.guessedWords.includes(word)) {
          state.guessedWords.push(word);
          currentUser.incrementTotalGuesses();
          revealWord(word);
          state.currentRow++;
          state.currentCol = 0;
        } else alert('You have already guessed this word.');
      } else alert('Not a valid word.');
    }
  }

  function addLetter(letter) {
    if (state.currentCol < 5) {
      state.grid[state.currentRow][state.currentCol] = letter;
      state.currentCol++;
    }
  }

  function removeLetter() {
    if (state.currentCol > 0) {
      state.grid[state.currentRow][state.currentCol - 1] = '';
      state.currentCol--;
    }
  }

  function updateGrid() {
    state.grid.forEach((row, rowIndex) =>
      row.forEach((letter, colIndex) => {
        const box = document.getElementById(`box${rowIndex}${colIndex}`);
        box.textContent = letter;
      })
    );
  }

  function getCurrentWord() {
    return state.grid[state.currentRow].join('');
  }

  function isWordValid(word) {
    return dictionary.includes(word);
  }

  function isLetter(key) {
    return /^[a-zA-Z]$/.test(key);
  }

  function revealWord(guess) {
    const row = state.currentRow;

    guess.split('').forEach((letter, index) => {
      const box = document.getElementById(`box${row}${index}`);
      const className = getLetterClass(letter, index);
      box.classList.add(className);
      updateKeyClass(letter, className);
    });

    checkGameOver(guess);
  }

  function getLetterClass(letter, index) {
    if (letter === state.secret[index]) return 'right';
    if (state.secret.includes(letter)) return 'wrong';
    return 'empty';
  }

  function updateKeyClass(letter, className) {
    const keyButton = document.getElementById(`key-${letter.toUpperCase()}`);
    if (keyButton) keyButton.className = `key ${className}`;
  }

  function checkGameOver(guess) {
    const isWinner = guess === state.secret;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
      if (isWinner) alert('Congratulations!');
      else if (isGameOver) alert(`Game Over! The word was ${state.secret}.`);
      displayStats();
    }, 500);
  }

  function displayStats() {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = `
      <p>Total Guesses: ${currentUser.stats.totalGuesses}</p>
      <p>Games Played: ${currentUser.stats.gamesPlayed}</p>
      <p>Games Won: ${currentUser.stats.gamesWon}</p>
    `;
  }

  function setupStatsMenu() {
    const statsButton = document.getElementById('stats-button');
    const statsMenu = document.getElementById('stats-menu');
    const closeStatsButton = document.getElementById('close-stats-button');

    statsButton.onclick = () => statsMenu.classList.add('visible');
    closeStatsButton.onclick = () => statsMenu.classList.remove('visible');
  }

  return (
    <div id="game-container">
      <div id="game"></div>
      <div id="keyboard-container"></div>
      <button id="stats-button">Stats</button>
      <div id="stats-menu">
        <div id="stats-container"></div>
        <button id="close-stats-button">Close</button>
      </div>
    </div>
  );
};

export default Whack;
