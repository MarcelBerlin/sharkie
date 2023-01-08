class ThrowableObject extends MovableObject {

    world;

    constructor(x, y, world) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.world = world;
        this.width = 40;
        this.height = 40;
        this.BubbleBlow();


    }

    BubbleBlow() {
        setTimeout(() => {
            this.BubbleBlowRight();
        }, 150);

    }


    BubbleBlowRight() {
        setInterval(() => {
            this.x += 10;
        }, 20);
    }


    



}