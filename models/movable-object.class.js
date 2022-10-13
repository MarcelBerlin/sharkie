class MovableObject {
    x = 0;
    y = 100;
    img;
    height = 250;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    otherDirection = false;
    min_Y = 0;
    max_Y = 275;
    speedY = 0.5;
    acceleration = 0.25;


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
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image) <img id="image" src> <-- ist genau das gleiche!
        this.img.src = path;
    }

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

    drawImage(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawOutlines(ctx) {
        if (this.CharacterAndEnemies()) {
            ctx.beginPath();
            ctx.lineWidth = '2';
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

    CharacterAndEnemies() {
        this instanceof Character || this instanceof PufferFishGreen || this instanceof PufferFishPurple || this instanceof PufferFishRed || this instanceof JellyFishPurple || this instanceof JellyFishYellow || this instanceof JellySuperdangerousGreen || this instanceof JellySuperdangerousPurple
    }

}

