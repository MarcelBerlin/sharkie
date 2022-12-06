class Layer extends MovableObject {


    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

