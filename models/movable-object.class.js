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
    max_Y = 370;
    

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

    swimLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
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


    
}

