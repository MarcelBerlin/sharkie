class JellySuperdangerousPurple extends MovableObject {

    height = 100;
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
                let i = this.currentImage % this.IMAGES_DANGEROUS.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
                let path = this.IMAGES_DANGEROUS[i];
                this.img = this.imageCache[path];
                this.currentImage++; 
                if(this.y <= this.min_Y) {
                    this.swimDown();
                } if(this.y >= this.max_Y) {
                    this.swimUp();
                }           
            }, 100);           
    }

}
