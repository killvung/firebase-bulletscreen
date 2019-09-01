import React, { useState } from 'react';
import './BarrageManager.css';

import BarrageCanvas from './BarrageCanvas';
import Barrage from './Barrage';

export default function BarrageManager() {
  const [barrages, setBarrages] = useState([]);

  const addBarrage = (barrage) => {
    barrages.push(barrage);
    setBarrages(barrages);
  };

  const removeBarrage = (barrage) => {
    barrages.splice(barrages.lastIndexOf(barrage), 1);
    setBarrages(barrages);
  };

  const handleClick = () => {
    addBarrage(new Barrage('Sample Test', '#000000', 2, 900, 675));
  };

  return (
    <div className="BarrageManage__root">
      <button type="button" onClick={handleClick}>Click me to shoot bullet comment on screen</button>
      <div className="BarrageManage__wrapper">
        <BarrageCanvas barrages={barrages} removeBarrage={removeBarrage} addBarrage={addBarrage} />
        <video className="BarrageManager__video" controls autoPlay muted src="test.mp4" type="video/mp4">
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
}
