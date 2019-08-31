import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarragePlayer from './BarragePlayer/BarragePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {'You ever seen a bullet screen? Maybe...'}
        </p>
        <BarragePlayer />
      </header>
    </div>
  );
}

export default App;
