// Reference: https://www.quackit.com/html/codes/scrolling_text.cfm
import React from 'react';
import './ScrollingText.css';

export default ({ text }) => (
    <div class="ScrollingText__wrapper">
        <p>{text}</p>
    </div>
);
