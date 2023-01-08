class Coin extends DrawableObject {

    COIN_IMAGES = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',

    ];

    width = 150;
    height = 150;

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.x = 500 + Math.random() * 10;
        this.y = 300 + Math.random() * 5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.COIN_IMAGES);
        }, 100);
    }



}