class ThrowableObject extends MovableObject {

    world;

    IMAGE_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];

    IMAGE_BOSS_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png',
    ];

    constructor(x, y, world) {
        super();
        this.loadImages(this.IMAGE_BUBBLE);
        this.loadImages(this.IMAGE_BOSS_BUBBLE);
        this.x = x;
        this.y = y;
        this.world = world;
        this.width = 40;
        this.height = 40;
        this.BubbleBlow();
        this.PoisonBubbleBlow();


    }


    BubbleBlow() {
        if (world.keyboard.D == true) {
            setTimeout(() => {
                setInterval(() => {
                    this.playAnimation(this.IMAGE_BUBBLE);
                    this.x += 10;
                }, 20);

            }, 150);           
        }
    }

    PoisonBubbleBlow() {
        if(world.keyboard.F == true) {
            setTimeout(() => {
                setInterval(() => {
                    this.playAnimation(this.IMAGE_BOSS_BUBBLE);
                    this.x += 10;
                }, 20);

            }, 150);    
        }
    }

}