// TODO: Tidy up
import React from 'react';
import './App.css';

import { Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

import BulletScreenManager from './BulletScreenManager/BulletScreenManager';
import ScrollingText from './ScrollingText/ScrollingText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollingText>
          <Header size="huge">{'Bullet Screen Generator'}</Header>
        </ScrollingText>
        <p>{'A simple experiment to turn comments into flying bullets across the video'}</p>
        <p>{'to test the phenomom in China and Japan'}</p>
        <div className="ImageExamples__root">
          <div>Example 01: </div>
          <Image size='large' rounded src='example.jpg' />
          <br />
          <div>Example 02: </div>
          <Image size='large' rounded src='example2.jpg' />
        </div>
        <ul style={{ lineHeight: '7vh' }}>
          <li>{'Input YouTube video url to the textbox below'}</li>
          <li>{'Click Generate'}</li>
        </ul>
      </header>
      <div className="App__wrapper container">
        <BulletScreenManager />
      </div>
      <div className="App__autoplay-info"><small>{'If you are using Firefox '}<a href="https://support.mozilla.org/en-US/kb/block-autoplay#w_always-allow-or-disallow-media-autoplay">{'click here '}</a>{'to turn on autoplay in order to function normally'}</small></div>
    </div>
  );
}

export default App;
