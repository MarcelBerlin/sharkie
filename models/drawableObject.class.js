class DrawableObject {

    img;
    imageCache = {};
    currentImage = 0;
    x = 0;
    y = 100;
    height = 140;
    width = 170;
   

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image) <img id="image" src> <-- ist genau das gleiche!
        this.img.src = path;
    }

    drawImage(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.log(error);
        }        
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }


    drawOutlines(ctx) {
        if (this instanceof Character || this instanceof ThrowableObject ||this instanceof PufferFishGreen || this instanceof PufferFishPurple || this instanceof PufferFishRed || this instanceof JellyFishPurple || this instanceof JellyFishYellow || this instanceof JellySuperdangerousGreen || this instanceof JellySuperdangerousPurple || this instanceof EndBoss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    
    
}