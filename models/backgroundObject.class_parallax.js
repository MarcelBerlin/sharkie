class BackgroundObject extends MovableObject {    

    constructor(image, speedModifier) {
        super().loadImage(image);
        this.x = 0;
        this.y = 0;       
        this.width = 1440;
        this.height = 480; 
        this.x2 = this.width;
        this.image = image;      
        this.speedModifier = speedModifier;
        this.speed = this.gameSpeed * this.speedModifier;
    }

    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x2 - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
    
}