// Bullet screen reference: https://programming.vip/docs/html-uses-canvas-to-realize-bullet-screen-function.html

import React, { useState, useRef, useEffect } from 'react';
import Barrage from './Barrage.js';

export default function BarragePlayer() {
    const canvasElement = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleDefault = (barrage) => {
            if (barrage.left === undefined || barrage.left === null) {
                barrage.left = canvasElement.current.width;
            } else {
                if (barrage.left < -200) {
                    messages.splice(messages.lastIndexOf(barrage), 1);
                    setMessages(messages);
                    barrage = null;
                } else {
                    barrage.move()
                    canvasElement.current.getContext('2d').fillStyle = barrage.color;
                    canvasElement.current.getContext('2d').fillText(barrage.content, barrage.left, barrage.height)
                    canvasElement.current.getContext('2d').restore();
                }
            }
        }

        const c_height = canvasElement.current.height;
        const c_width = canvasElement.current.width;

        //Cyclic Scrubbing Canvas to Realize Animation Effect
        setInterval(function () {
            if (canvasElement.current !== null) {
                canvasElement.current.getContext('2d').clearRect(0, 0, c_width, c_height);
                canvasElement.current.getContext('2d').save();
                for (var i = 0; i < messages.length; i++) {
                    handleDefault(messages[i]);
                }
            }
        }, 20)

        const setFontForCanvas = (canvas, font) => {
            canvas.font = font
        }

        setFontForCanvas(canvasElement.current.getContext("2d"), "25px DengXian");
    });

    const addBarrage = () => {
        messages.push(new Barrage("Sample Test", '#000000', 2, canvasElement.current.height));
        setMessages(messages)
    }

    return (
        <div id="barrageplayer">
            <canvas id="cv_video" width="900px" height="450px" ref={canvasElement}></canvas>
            <button onClick={addBarrage}>{'Click me to shoot bullet comment on screen'}</button>
        </div>
    );
}
