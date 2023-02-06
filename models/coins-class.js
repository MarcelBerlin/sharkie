class Coin extends MovableObject {

    IMAGES_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',

    ];
    world;
    width = 50;
    height = 50;

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 300 + Math.random() * 1500
        this.y = this.min_Y + 70 + Math.random() * 300;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 100);
    }





}