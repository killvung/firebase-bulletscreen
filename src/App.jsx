import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarrageManager from './BarragePlayer/BarrageManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>{'You ever seen a bullet screen?'}</p>
        <p>{'While the video is playing, comments from the video fly from\nthe right side of the screen to the left side of the screen'}</p>
      </header>
      <div className="App__wrapper container">
        <BarrageManager />
      </div>
      <div className="App__autoplay-info"><small>{'If you are using Firefox '}<a href="https://support.mozilla.org/en-US/kb/block-autoplay#w_always-allow-or-disallow-media-autoplay">{'click here '}</a>{'to turn on autoplay in order to run this feature'}</small></div>
    </div>
  );
}

export default App;
