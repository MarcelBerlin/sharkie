class PufferFish extends MovableObject {

    height = 80;
    width = 100;    

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
    }
}