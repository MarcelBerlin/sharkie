class MovableObject extends DrawableObject {

    
    speed = 0.1;
    otherDirection = false;
    min_Y = 0;
    max_Y = 275;
    speedY = 0.15;
    acceleration = 0.25;
    energy = 100;
    lastHit = 0;
    
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0        
    }
    



    applyGravity() {
        setInterval(() => {
            if (this.y <= this.max_Y) {
                this.y += this.speedY;
            }             
        }, 1000 / 25);
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
    isColliding(movableObject) {
        return  this.x + this.width - this.offset.right > movableObject.x + movableObject.offset.left &&
                this.y + this.height - this.offset.bottom > movableObject.y + movableObject.offset.top &&
                this.x + this.offset.left < movableObject.x + movableObject.width - movableObject.offset.right &&
                this.y + this.offset.top < movableObject.y + movableObject.height - movableObject.offset.bottom;
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

