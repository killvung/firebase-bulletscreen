// Bullet screen reference: https://programming.vip/docs/html-uses-canvas-to-realize-bullet-screen-function.html
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BarrageCanvas.css';
import Barrage from './Barrage';

import testData from './testData.json'

function BarrageCanvas({ barrages, removeBarrage, addBarrage }) {
  const canvasElement = useRef(null);
  useEffect(() => {
    const { height, width } = canvasElement.current;
    const activateBarrage = (barrage) => {
      if (barrage.hasReachedToEdge()) {
        removeBarrage(barrage);
      } else {
        const canvasContext = canvasElement.current.getContext('2d');
        canvasContext.fillStyle = 'white';
        canvasContext.strokeStyle = 'black';
        barrage.moveLeft();
        canvasContext.fillText(barrage.content, barrage.left, barrage.height);
        canvasContext.strokeText(barrage.content, barrage.left, barrage.height);
        canvasContext.restore();
      }
    };


    const performBarrageAnimation = () => {
      const context = canvasElement.current.getContext('2d');
      context.clearRect(0, 0, width, height);
      context.save();
      for (let i = 0; i < barrages.length; i += 1) {
        activateBarrage(barrages[i]);
      }
    };

    setInterval(() => {
      if (canvasElement.current !== null) {
        performBarrageAnimation();
      }
    }, 20);

    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * testData.length);
      const text = testData[randomIndex];
      addBarrage(new Barrage(text, '#FFFFFF', 2, 900, 675));
    }, 3000);
    canvasElement.current.getContext('2d').font = 'bold 35px DengXian';
  });

  return (
    <canvas className="BarrageCanvas___element" width="900px" height="675px" ref={canvasElement} />
  );
}

BarrageCanvas.defaultProps = {
  barrages: [],
  addBarrage: () => { },
  removeBarrage: () => { },
};

BarrageCanvas.propTypes = {
  barrages: PropTypes.arrayOf(Barrage),
  addBarrage: PropTypes.func,
  removeBarrage: PropTypes.func,
};

export default BarrageCanvas;
