// Bullet screen reference: https://programming.vip/docs/html-uses-canvas-to-realize-bullet-screen-function.html
import React, { Fragment, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BarrageCanvas.css';
import Barrage from './Barrage';

function BarrageCanvas({ barrages, removeBarrage, addBarrage }) {
  const canvasElement = useRef(null);
  useEffect(() => {
    const activateBarrage = (barrage) => {
      if (barrage.left < -200) {
        removeBarrage(barrage);
      } else {
        const canvasContext = canvasElement.current.getContext('2d');
        barrage.moveLeft();
        canvasContext.fillStyle = barrage.color;
        canvasContext.fillText(barrage.content, barrage.left, barrage.height);
        canvasContext.restore();
      }
    };

    const { height, width } = canvasElement.current;
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
    canvasElement.current.getContext('2d').font = '25px DengXian';
  });

  return (
    <Fragment className="BarrageCanvas___root">
      <canvas className="BarrageCanvas___element" width="900px" height="675px" ref={canvasElement} />
    </Fragment>
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
