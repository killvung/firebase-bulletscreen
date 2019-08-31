export default class Barrage {
    constructor(content, color, speed, canvasHeight) {
        this.content = content;
        this.color = color;
        this.speed = speed;
        this.left = null;

        // Default setting for now. Supposely there are static top and bottom
        this.height = parseInt(Math.random() * canvasHeight) + 10;
    }

    move() {
        this.left = this.left - this.speed;
    }
}
