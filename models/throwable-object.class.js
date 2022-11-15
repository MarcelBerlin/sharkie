class ThrowableObject extends MovableObject {

    
    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = 150;
        this.y = 220;
        this.width = 40;
        this.height = 40;
        this.Throw(150, 220);
       
    }

    Throw(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    
}