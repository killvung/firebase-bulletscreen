// TODO: Tidy up
import React from 'react';
import logo from './logo.svg';
import './App.css';

import BulletScreenManager from './BulletScreenManager/BulletScreenManager';
import ScrollingText from './ScrollingText/ScrollingText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ScrollingText text={'You ever seen a bullet screen?'} />
        <p>{'While the video is playing, comments from the video fly from\nthe right side of the screen to the left side of the screen'}</p>
        <ul style={{ lineHeight: '7vh' }}>
          <li>{'Input any YouTube URL'}</li>
          <li>{'Click generate'}</li>
          <li>{'...'}</li>
        </ul>
      </header>
      <div className="App__wrapper container">

        <BulletScreenManager />
      </div>
      <div className="App__autoplay-info"><small>{'If you are using Firefox '}<a href="https://support.mozilla.org/en-US/kb/block-autoplay#w_always-allow-or-disallow-media-autoplay">{'click here '}</a>{'to turn on autoplay in order to run this feature'}</small></div>
    </div>
  );
}

export default App;
