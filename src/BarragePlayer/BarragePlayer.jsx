import React, { useState } from 'react';
import BarrageCanvas from './BarrageCanvas';

export default function BarragePlayer() {
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
    <div id="barrageplayer">
      <BarrageCanvas barrages={barrages} removeBarrage={removeBarrage} addBarrage={addBarrage} />
      <video id="v_video" controls src="test.mp4" type="video/mp4">
        <track kind="captions" />
      </video>
    </div>
  );
}
