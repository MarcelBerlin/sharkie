class Poisonflask extends DrawableObject {

    IMAGES_POISONFLASK = [
        'img/4. Marcadores/Posión/Dark - Left.png',
        'img/4. Marcadores/Posión/Dark - Right.png'
    ];

    width = 50;
    height = 50;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Dark - Left.png');
        this.x = 500;
        this.y = 200;
    }

}