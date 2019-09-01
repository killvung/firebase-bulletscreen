import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import './BarrageManager.css';

import BarrageCanvas from './BarrageCanvas';

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

  return (
    <div className="BarrageManage__root">
      <div className="BarrageManage__wrapper">
        <BarrageCanvas barrages={barrages} removeBarrage={removeBarrage} addBarrage={addBarrage} />
        <ReactPlayer width="900px" height="675px" playing url='https://www.youtube.com/watch?v=D0nEDS6wd-w' />
      </div>
    </div>
  );
}
