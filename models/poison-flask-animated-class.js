class PoisonflaskAnimated extends MovableObject {

    IMAGES_POISONFLASK_ANIMATED = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',

    ];

    width = 50;
    height = 70;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISONFLASK_ANIMATED);
        this.x = 300 + Math.random() * 1500;
        this.y = this.min_Y + 70 + Math.random() * 250;
        this.animateFlask();
    }

    animateFlask() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_POISONFLASK_ANIMATED);
        }, 150);
    }

}