export default class Barrage {
  constructor(content, color, speed, canvasWidth, canvasHeight) {
    this.content = content;
    this.color = color;
    this.speed = speed;
    this.left = canvasWidth;

    // Default setting for now. Supposely there are static top and bottom
    this.height = parseInt(Math.random() * canvasHeight, 10) + 10;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }
}
