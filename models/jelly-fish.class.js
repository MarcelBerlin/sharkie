class JellyFish extends MovableObject {
    
    height = 120;
    width = 90; 

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');

        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
    }
}