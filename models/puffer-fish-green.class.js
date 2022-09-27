class PufferFishGreen extends MovableObject {

    height = 80;
    width = 100;    
    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',        
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.35;
        this.swimLeft(); 
        this.animate();
    } 
  


    animate() {
        this.swimLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}