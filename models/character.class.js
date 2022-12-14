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

    IMAGES_LONGIDLE_INTRO = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png'

    ];

    IMAGES_LONGIDLE = [

        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png'
    ];


    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_BUBBLE_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/8.png'
    ];

    IMAGES_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',

    ];

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'

    ];

    IMAGES_HURT_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_HURT_SHOCKED = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    IMAGES_DEAD_POISON = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_DEAD_SHOCK = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];


    speed = 3.5;
    width = 170;
    height = 200;
    y = 100;
    world;
    lastMovement = 0;

    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 40
    }

    swimming_sound = new Audio('audio/swim.mp3');

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE_INTRO);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISON_BUBBLE);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_SHOCKED);
        this.loadImages(this.IMAGES_DEAD_POISON);
        this.loadImages(this.IMAGES_DEAD_SHOCK);
        this.animateCharacter();
        this.applyGravity();
        this.swimAnimate();
    }


    animateCharacter() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);

        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.playAnimation(this.IMAGES_FINSLAP);
                this.getMovementTimeStamp();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_SHOCKED);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
                this.getMovementTimeStamp();
            } else if (this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_BUBBLE_ATTACK);
                this.getMovementTimeStamp();
            } else if (this.world.keyboard.F) {
                this.playAnimation(this.IMAGES_POISON_BUBBLE);
                this.getMovementTimeStamp();
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD_POISON);
                this.clearAllIntervals();
            } else if (this.characterLongIdle()) {
                this.playLongIdleAnimation();
            }
        }, 100);
    }

    swimAnimate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
                this.swimRight();
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x >= 50) {
                this.swimLeft();
                this.otherDirection = true
                this.world.keyboard.D = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y >= -50) {
                this.y -= this.speed;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y <= this.max_Y) {
                this.y += this.speed;
                this.swimming_sound.play();
            }

            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

    }


    getMovementTimeStamp() {
        this.lastMovement = new Date().getTime();
        // console.log(this.lastMovement);
    }

    characterLongIdle() {
        let timepassed = new Date().getTime() - this.lastMovement;
        timepassed = timepassed / 1000;
        return timepassed > 5;
    }

    playLongIdleAnimation() {
        let i = this.currentImage;
        let j = this.currentImage % this.IMAGES_LONGIDLE.length; // Das % Zeichen sorgt f??r ein wiederholtes itterieren.
        let path1 = this.IMAGES_LONGIDLE_INTRO[i];
        let path2 = this.IMAGES_LONGIDLE[j];
        this.currentImage++;
        if (this.currentImage <= this.IMAGES_LONGIDLE_INTRO.length) {
            this.img = this.imageCache[path1];
        } else {
            this.img = this.imageCache[path2];
        }
    }


    clearAllIntervals() {
        setTimeout(() => {
            for (let i = 1; i < 9999; i++) window.clearInterval(i);

        }, 500);
        world.ambient_Sound.pause();
        world.game_Sound.pause();
        world.bossAnthem.pause();
    }



}