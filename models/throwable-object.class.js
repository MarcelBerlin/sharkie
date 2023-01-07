class ThrowableObject extends MovableObject {


    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
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