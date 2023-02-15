class JellySuperdangerousGreen extends MovableObject {

    height = 120;
    width = 100; 
    dead = false;
    world;

    IMAGES_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',

    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];



    constructor(world) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.world = world;
        this.loadImages(this.IMAGES_DANGEROUS);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1200 + Math.random() * 700;
        this.y = 50 + Math.random() * 200;
        this.speed = 0.1 + Math.random() * 0.2;
        this.animate();
        this.checkIfDead();
        
    };  

    animate() { 
        this.swimUp();
            setStoppableInterval(() => {
                this.playAnimation(this.IMAGES_DANGEROUS);
                if(this.y - 75 <= this.min_Y) {
                    this.swimDown();
                } if(this.y >= this.max_Y - 50) {
                    this.swimUp();
                }           
            }, 100);   
                   
    }

    checkIfDead() {
        setStoppableInterval(() => {
            if (this.superJellyFishEnergy == 0) {
                this.speed = 0;
                this.y -= 15;
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 100);
    }

    

}

