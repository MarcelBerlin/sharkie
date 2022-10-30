class MovableObject extends DrawableObject{
    x = 0;
    y = 100;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    otherDirection = false;
    min_Y = 0;
    max_Y = 275;
    speedY = 0.5;
    acceleration = 0.25;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.y <= this.max_Y) {
                this.y += this.speedY;
            } else {
                this.speedY = 0;
            }
        }, 1000 / 25);
    }


    //########################################
    // loadImage(path) {
    //     this.img = new Image(); // this.img = document.getElementById('image) <img id="image" src> <-- ist genau das gleiche!
    //     this.img.src = path;
    // }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    //########################################

  
    drawOutlines(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof PufferFishPurple || this instanceof PufferFishRed || this instanceof JellyFishPurple || this instanceof JellyFishYellow || this instanceof JellySuperdangerousGreen || this instanceof JellySuperdangerousPurple || this instanceof EndBoss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    swimLeft() {
        this.x -= this.speed;

    }

    swimRight() {
        this.x += this.speed;

    }

    swimUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60);
    }

    swimDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // is colliding (enemy)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms
        timepassed = timepassed / 1000; // Differenz in sek
        return timepassed < 1;

    }    

    isDead() {       
        return this.energy == 0;
            
    }

   
}

