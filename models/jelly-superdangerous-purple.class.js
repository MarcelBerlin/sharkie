class JellySuperdangerousPurple extends MovableObject {

    height = 120;
    width = 100; 
    IMAGES_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'  

    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_DANGEROUS);
        this.x = 1600 + Math.random() * 700;
        this.y = 50 + Math.random() * 300;
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
        
        
    };  

    animate() { 
        this.swimUp();
            setInterval(() => {
                this.playAnimation(this.IMAGES_DANGEROUS); 
                if(this.y <= this.min_Y) {
                    this.swimDown();
                } if(this.y >= this.max_Y) {
                    this.swimUp();
                }           
            }, 100);           
    }

}
