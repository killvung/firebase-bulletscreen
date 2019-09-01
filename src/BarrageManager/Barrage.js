export default class Barrage {
  constructor(content, color, speed, width, height) {
    this.content = content;
    this.color = color;
    this.speed = speed;
    this.left = width;
    // Default setting for now. Supposely there are static top and bottom
    this.height = parseInt(Math.random() * height, 10) + 10;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

  hasReachedToEdge(){
    return this.left < -9001; // TODO: Determine a better ratio
  }
}
