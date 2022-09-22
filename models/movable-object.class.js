class MovableObject {
    x = 20;
    y = 100;
    img;
    height = 250;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.15; 

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

    swimRight() {
        console.log('Swimming Right');
    }

    swimLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
       
    }

}

