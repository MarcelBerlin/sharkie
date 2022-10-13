class JellyFishYellow extends MovableObject {

    height = 120;
    width = 90;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 1000 + Math.random() * 700;
        this.y = 50 + Math.random() * 300;
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
        
    };  
    

    animate() {
        this.swimUp();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
            if(this.y <= this.min_Y) {
                this.swimDown();
            } if(this.y >= this.max_Y) {
                this.swimUp();
            }           
        }, 100);
    }
}