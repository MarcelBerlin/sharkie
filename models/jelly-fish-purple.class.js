class JellyFishPurple extends MovableObject {

    height = 120;
    width = 90;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        
    };  
    

    animate() {
        this.swimLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
    }
}