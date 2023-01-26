class World {

    character = new Character();
    healthbar = new HealthBar();
    coinbar = new CoinBar();
    poisonbar = new PoisonBar();
    throwingBubble = [];
    throwingPoisonBubble = [];
    poisonBubbles = 0;
    level = createLevel1(world);
    percentage = 20;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;    
    bossAnthem = new Audio('audio/bossanthem.mp3');
    coin_sound = new Audio('audio/coins.wav');
    slap_sound = new Audio('audio/slap.wav');
    characterHitByPufferFish = new Audio('audio/hit.wav');
    characterHitByJellyFish = new Audio('audio/electroshock.wav');
    bubble_sound = new Audio('audio/bubble.wav');
    bottle_sound = new Audio('audio/bottle.wav');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.setWorld();
        this.swimCollectAndAttack();
        this.draw();
    }


    setWorld() {
        this.character.world = this;
    }


    swimCollectAndAttack() {
        setStoppableInterval(() => {
            this.CheckCollisions();
            this.grabCoins();
            this.grabPoison();
            this.checkThrowObjects();
            this.bubbleHit();
            this.finSlapHit();
            this.poisonBubbleHit();
        }, 300)
    }

    // Elements will draw on Canvas ################################ 

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.poisonbar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.throwingBubble);
        this.addObjectToCanvas(this.throwingPoisonBubble);
        this.addObjectToCanvas(this.level.flasks);
        this.addObjectToCanvas(this.level.coins);
        this.addToMap(this.character);
        this.addObjectToCanvas(this.level.pufferFish);
        this.addObjectToCanvas(this.level.jellyFish);
        this.addObjectToCanvas(this.level.endBoss);
        this.addObjectToCanvas(this.level.lights);
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer und immer wieder aufgerufen

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

        // #############################################
    }


    addObjectToCanvas(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.drawImage(this.ctx);
        mo.drawOutlines(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

    // ####################################################


    // game logic -------------------------------- # 

    checkThrowObjects() {
        if (this.keyboard.D) {
            this.ThrowStandardBubble();
        }

        if (this.keyboard.F && this.poisonBubbles > 0) {
            this.ThrowPoisonBubble();
        }
    }


    CheckCollisions() {
        this.CheckCollisionPufferFish();
        this.CheckCollisionJellyFish();
        this.CheckCollisionEndboss();
    }


    CheckCollisionPufferFish() {
        this.level.pufferFish.forEach((pufferFish) => {
            if (this.character.isColliding(pufferFish)) {
                this.DamageFromPufferfish();
            }
        })
    }


    CheckCollisionJellyFish() {
        this.level.jellyFish.forEach((jellyFish) => {
            if (this.character.isColliding(jellyFish)) {
                this.DamageFromJellyfish();
            }
        })
    }


    CheckCollisionEndboss() {
        this.level.endBoss.forEach((endBoss) => {
            if (this.character.isColliding(endBoss)) {
                this.DamageFromEndboss();
            }
        })
    }


    bubbleHit() {
        let i = 0;
        this.level.jellyFish.forEach((jellyFish) => {
            this.throwingBubble.forEach((bubble) => {
                if (bubble.isColliding(jellyFish)) {
                    this.jellyFishHitAndKill(jellyFish, i);
                }
            })
        })
    }

    finSlapHit() {
        this.level.pufferFish.forEach((pufferFish) => {
            if (this.character.attackWithFinslap(pufferFish) && this.keyboard.SPACE) {
                this.pufferFishHitAndKill(pufferFish);
            }
        })
    }

    poisonBubbleHit() {
        let i = 0;
        this.level.endBoss.forEach((endBoss) => {
            this.throwingPoisonBubble.forEach((poisonBubble) => {
                if (poisonBubble.isColliding(endBoss)) {
                    this.endBossHitAndKill(endBoss, i);
                }
            })
        })
    }

    grabCoins() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.increaseCoinbar(i);
            }
        })
    }

    grabPoison() {
        this.level.flasks.forEach((poison, i) => {
            if (this.character.isColliding(poison)) {
                this.increasePoisonbar(i);
            }
        })
    }

    // excluded functions -------------------------------- # 

    ThrowStandardBubble() {
        if (this.character.otherDirection == true) {
            let bubble = new ThrowableObject(this.character.x, this.character.y + 110, this.character.otherDirection);
            this.throwingBubble.push(bubble);
        } else {
            let bubble = new ThrowableObject(this.character.x + 140, this.character.y + 110, this.character.otherDirection);
            this.throwingBubble.push(bubble);
        }
    }

    ThrowPoisonBubble() {
        if (this.character.otherDirection == true) {
            let poisonBubble = new ThrowableObject(this.character.x, this.character.y + 110, this.character.otherDirection);
            this.throwingPoisonBubble.push(poisonBubble);
        } else {
            let poisonBubble = new ThrowableObject(this.character.x + 140, this.character.y + 110, this.character.otherDirection);
            this.throwingPoisonBubble.push(poisonBubble);
        }
        this.poisonBubbles--;
        this.character.removePoisonFromBar();
        this.poisonbar.setPercentage(this.character.poison);
    }

    DamageFromPufferfish() {
        this.character.playAnimation(this.character.IMAGES_HURT_POISONED);
        this.characterHitByPufferFish.play();
        this.character.hit();
        this.healthbar.setPercentage(this.character.energy);
    }

    DamageFromJellyfish() {
        this.character.playAnimation(this.character.IMAGES_HURT_SHOCKED);
        this.characterHitByJellyFish.play();
        this.character.hit();
        this.healthbar.setPercentage(this.character.energy);
    }

    DamageFromEndboss() {
        this.character.playAnimation(this.character.IMAGES_HURT_POISONED);
        this.characterHitByPufferFish.play();
        this.character.hit();
        this.healthbar.setPercentage(this.character.energy);
    }

    pufferFishHitAndKill(pufferFish) {
        this.slap_sound.play();
        pufferFish.hitPufferFish();
        pufferFish.pufferFishIsDead();
    }

    jellyFishHitAndKill(jellyFish, i) {
        this.bubble_sound.play();
        jellyFish.hitJellyFish();
        jellyFish.hitSuperJellyFish();
        jellyFish.jellyFishIsDead();
        jellyFish.superJellyFishIsDead();
        this.throwingBubble.splice(i, 1);
    }

    endBossHitAndKill(endBoss, i) {
        this.bubble_sound.play();
        endBoss.hitEndboss();
        endBoss.endBossIsDead();
        this.throwingPoisonBubble.splice(i, 1);
    }

    increaseCoinbar(i) {
        this.coin_sound.play();
        this.character.addCoinToBar();
        this.coinbar.setPercentage(this.character.coin);
        this.level.coins.splice(i, 1);
    }

    increasePoisonbar(i) {
        this.poisonBubbles++;
        this.bottle_sound.play();
        this.character.addPoisonflaskToBar();
        this.poisonbar.setPercentage(this.character.poison);
        this.level.flasks.splice(i, 1);
    }


}