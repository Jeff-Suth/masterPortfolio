// Whack.js
import React, { useEffect } from 'react';
import { startup } from './Startup.js';

const Whack = () => {
  // Use useEffect to run startup() when the component mounts
  useEffect(() => {
    startup();
  }, []); // Empty dependency array ensures it only runs once on mount

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
