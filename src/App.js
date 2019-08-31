import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarragePlayer from './BarragePlayer/BarragePlayer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {'You ever seen a bullet screen? Maybe...'}
        </p>
        <BarragePlayer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
