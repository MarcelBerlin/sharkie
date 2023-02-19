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

    IMAGES_WITHOUT_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2/7.png',
    ];

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
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

    world;
    speed = 3.5;
    width = 170;
    height = 200;
    y = 100;    
    lastMovement = 0;
    firstAttack = false;
    spacePressed = false;


    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 40
    }

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE_INTRO);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISON_BUBBLE);
        this.loadImages(this.IMAGES_WITHOUT_BUBBLE);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_SHOCKED);
        this.loadImages(this.IMAGES_DEAD_POISON);
        this.loadImages(this.IMAGES_DEAD_SHOCK);
        this.animateCharacter();
        this.gravityForCharacter();
        this.swimAnimate();

    }

    // character logic -------------------------------- # 

    gravityForCharacter() {
        setStoppableInterval(() => {
            if (this.y <= this.max_Y - 75) {
                this.y += this.speedY;
            }
        }, 1000 / 25);
    }

    animateCharacter() {
        setStoppableInterval(() => {
            this.loadImageArray();
            if (this.isHurt()) {
                this.collisionWithEnemy();
            } else if (this.canAttack() ) {
                this.characterAttackEnemies();                
            } else if (this.isDead()) {
                this.characterIsDead();
            } else if (this.canCharacterSwim()) {
                this.characterMoveOrders();
            } else if (this.characterLongIdle()) {                
                this.playLongIdleAnimation();
            } 
        }, 1000 / 10);
    }
    
    swimAnimate() {
        setStoppableInterval(() => {
            if (this.canSwimRight()) {
                this.characterMoveRight();
            } if (this.canSwimLeft()) {
                this.characterMoveLeft();
            } if (this.canSwimUp()) {
                this.characterMoveUp();
            } if (this.canSwimDown()) {
                this.characterMoveDown();
            } this.characterCamPosition();
        }, 1000 / 60);
    }

    
    // excluded functions -------------------------------- #

    characterCamPosition() {
        return this.world.camera_x = -this.x + 75;
    }

    canCharacterSwim() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
    }

    canSwimRight() {
        return this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x;
    }

    canSwimLeft() {
        return this.world.keyboard.LEFT && this.x >= 50;
    }

    canSwimUp() {
        return this.world.keyboard.UP && this.y >= this.min_Y;
    }

    canSwimDown() {
        return this.world.keyboard.DOWN && this.y <= this.max_Y - 75;
    }

    canAttack() {
        return this.world.keyboard.SPACE || this.world.keyboard.D || this.world.keyboard.F;
    }

    collisionWithEnemy() {
        return this.collideWithPufferFish() || this.collideWithJellyFish() || this.collideWithSuperJellyFish() || this.collideWithEndboss();
    }

    characterMoveRight() {
        this.swimRight();
        this.otherDirection = false;
        swimming_sound.play();
    }

    characterMoveLeft() {
        this.swimLeft();
        this.otherDirection = true
        this.world.keyboard.D = false;
        swimming_sound.play();
    }

    characterMoveUp() {
        this.y -= this.speed;
        swimming_sound.play();
    }

    characterMoveDown() {
        this.y += this.speed;
        swimming_sound.play();
    }

    characterAttackEnemies() {
        if (this.world.keyboard.SPACE) {           
            this.meleeAttack();
        } else if (this.world.keyboard.D) {
            this.standardBubble();
        } else if (this.world.keyboard.F) {
            this.poisonBubble();
        } 
    }
    

    meleeAttack() {
        this.activateFinslapAttack();
        this.playAnimation(this.IMAGES_FINSLAP);
        this.firstAttack = true;
        this.spacePressed = true;
        this.getMovementTimeStamp();
    }


    characterMoveOrders() {
        this.playAnimation(this.IMAGES_SWIM);
        this.getMovementTimeStamp();
    }

    standardBubble() {
        this.activateBubbleAttack();
        this.playAnimation(this.IMAGES_BUBBLE_ATTACK);
        this.firstAttack = true;   
        this.getMovementTimeStamp();
    }

    poisonBubble() {
        this.activatePoisonAttack();
        this.playAnimation(this.IMAGES_POISON_BUBBLE);
        this.firstAttack = true;   
        this.getMovementTimeStamp();
    }

    characterIsDead() {
        this.playAnimation(this.IMAGES_DEAD_POISON);
        loseGame();
        stopGame();
    }

    collideWithPufferFish() {
        this.world.level.pufferFish.forEach(pufferFish => {
            if (this.isColliding(pufferFish)) {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            }
        });
    }

    collideWithJellyFish() {
        this.world.level.jellyFish.forEach(jellyFish => {
            if (this.isColliding(jellyFish)) {
                this.playAnimation(this.IMAGES_HURT_SHOCKED);
            }
        });
    }

    collideWithSuperJellyFish() {
        this.world.level.superJellyFish.forEach(superJellyFish => {
            if (this.isColliding(superJellyFish)) {
                this.playAnimation(this.IMAGES_HURT_SHOCKED);
            }
        });
    }
    
    collideWithEndboss() {
        this.world.level.endBoss.forEach(endBoss => {
            if (this.isColliding(endBoss)) {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            }
        });
    }

    // ------------------------------- #

    getMovementTimeStamp() {
        this.lastMovement = new Date().getTime();
    }

    characterLongIdle() {
        let timepassed = new Date().getTime() - this.lastMovement;
        timepassed = timepassed / 1000;
        return timepassed > 3;
    }

    playLongIdleAnimation() {
        this.world.keyboard.D = false;
        this.world.keyboard.F = false;
        this.world.keyboard.SPACE = false;
        let i = this.currentImage;
        let j = this.currentImage % this.IMAGES_LONGIDLE.length; // Das % Zeichen sorgt für ein wiederholtes itterieren.
        let path1 = this.IMAGES_LONGIDLE_INTRO[i];
        let path2 = this.IMAGES_LONGIDLE[j];
        this.currentImage++;
        if (this.currentImage <= this.IMAGES_LONGIDLE_INTRO.length) {
            this.img = this.imageCache[path1];
        } else {
            this.img = this.imageCache[path2];
        }
    }

    loadImageArray() {
        let i = this.currentImage % this.IMAGES_IDLE.length; // let i = 0 % 6; => 0, Rest 1 // 0, 1, 2, 3, 4, 5, 6, 0, 1, 2... etc
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    activateBubbleAttack() {
        if (!this.firstAttack) {
            this.currentImage = 0;
            let KeyDIsAlreadyPressed = setInterval(() => {
                this.firstAttack = true;
                this.world.keyboard.D = true;
            }, 10)

            setTimeout(() => {
                clearInterval(KeyDIsAlreadyPressed);
                this.firstAttack = false;
                this.world.keyboard.D = false;                               
            }, 400);
        }
    }

    activatePoisonAttack() {
        if (!this.firstAttack) {
            this.currentImage = 0;
            let KeyFIsAlreadyPressed = setInterval(() => {
                this.firstAttack = true;
                this.world.keyboard.F = true;
            }, 10)

            setTimeout(() => {
                clearInterval(KeyFIsAlreadyPressed);
                this.firstAttack = false;
                this.world.keyboard.F = false;                              
            }, 400);
        }
    }

    activateFinslapAttack() {
        if (!this.firstAttack) {
            this.currentImage = 0;
            let KeySpaceIsAlreadyPressed = setInterval(() => {
                this.firstAttack = true;                
                this.world.keyboard.SPACE = true;
            }, 10)

            setTimeout(() => {
                clearInterval(KeySpaceIsAlreadyPressed);
                this.firstAttack = false;                
                this.world.keyboard.SPACE = false;                              
            }, 400);
        }
    }


}