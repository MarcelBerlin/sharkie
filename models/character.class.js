class Character extends MovableObject {

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    speed = 5;
    world;
    swimming_sound = new Audio('audio/swim.mp3');
    background = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png'),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png'),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png'),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png')
    ];
           

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.animateIdle();
        this.swimAnimate();
    }


    animateIdle() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }


    swimAnimate() {
        this.swimming_sound.pause();
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
                this.x += this.speed;
                this.background[1]; 
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x >= 50) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }                       

            if (this.world.keyboard.UP && this.y >= -100) {
                this.y -= this.speed;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y <= 250) {
                this.y += this.speed;
                this.swimming_sound.play();
            }       
            this.world.camera_x = -this.x + 50 ;
            
            
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                let i = this.currentImage % this.IMAGES_SWIM.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }

    
}