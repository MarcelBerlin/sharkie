class JellySuperdangerousPurple extends MovableObject {

    height = 120;
    width = 100; 
    dead = false;
    world;

    IMAGES_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'  

    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',

    ];

    constructor(world) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.world = world;
        this.loadImages(this.IMAGES_DANGEROUS);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1400 + Math.random() * 700;
        this.y = 50 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.1;
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
