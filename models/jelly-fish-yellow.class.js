class JellyFishYellow extends MovableObject {

    height = 120;
    width = 90;
    dead = false;
    world;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',

    ];

    constructor(world) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.world = world;
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 700;
        this.y = 50 + Math.random() * 200;
        this.speed = 0.25 + Math.random() * 0.15;
        this.animate();
        this.checkIfDead();
    };  
    

    animate() {
        this.swimUp();
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
            if(this.y - 75 <= this.min_Y) {
                this.swimDown();
            } if(this.y >= this.max_Y - 50) {
                this.swimUp();
            }           
        }, 100);

    }

    checkIfDead() {
        setStoppableInterval(() => {
            if (this.jellyFishEnergy == 0) {
                this.speed = 0;
                this.y -= 15;
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 100);
    }
}