class World {

    character = new Character();
    healthbar = new HealthBar();
    healthbarBoss = new HealthBarBoss();
    coinbar = new CoinBar();
    poisonbar = new PoisonBar();
    throwingBubble = [];
    throwingPoisonBubble = [];
    poisonBubbles = 0;
    lastBubble = false;
    alreadyThrow = false;
    alreadyHitten = false;
    level = createLevel1(world);
    percentage = 20;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    y = 30;

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
            this.checkThrowObjects();
            this.grabCoins();
            this.grabPoison();
            this.bubbleHitJelly();
            this.bubbleHitSuperJelly();
            this.finSlapHit();
            this.poisonBubbleHit();
            this.CheckCollisions();
        }, 200)
    }

    /**
     * Elements are going to draw on Canvas by loading init()
     */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthbar);
        this.addToMap(this.healthbarBoss);
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
        this.addObjectToCanvas(this.level.superJellyFish);
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


    /**
     * game logic (checks if objects collide and were hitten)
     */

    checkThrowObjects() {
        if (this.characterCanThrowBubble()) {
            this.alreadyThrow = true;            
            this.ThrowStandardBubble();           
        }
        if (this.characterCanThrowPoisonBubble()) {
            this.alreadyThrow = true;
            this.ThrowPoisonBubble();
        } else {
            this.bubbleDelay();
        }
    }

    CheckCollisions() {
        this.CheckCollisionPufferFish();
        this.CheckCollisionJellyFish();
        this.CheckCollisionSuperJellyFish();
        this.CheckCollisionEndboss();
    }

    CheckCollisionPufferFish() {
        this.level.pufferFish.forEach((pufferFish) => {
            if (this.character.isColliding(pufferFish) && !this.character.isHurt()) {
                this.DamageFromPufferfish();
            }
        })
    }

    CheckCollisionJellyFish() {
        this.level.jellyFish.forEach((jellyFish) => {
            if (this.character.isColliding(jellyFish) && !this.character.isHurt()) {
                this.DamageFromJellyfish();
            }
        })
    }

    CheckCollisionSuperJellyFish() {
        this.level.superJellyFish.forEach((superJellyFish) => {
            if (this.character.isColliding(superJellyFish) && !this.character.isHurt()) {
                this.DamgeFromSuperJellyfish();
            }
        })
    }

    CheckCollisionEndboss() {
        this.level.endBoss.forEach((endBoss) => {
            if (this.character.isColliding(endBoss) && !this.character.isHurt()) {
                this.DamageFromEndboss();
            }
        })
    }

    bubbleHitJelly() {
        let i = 0;
        this.CheckBubbleHitNormalJelly(i);
    }

    bubbleHitSuperJelly() {
        let i = 0;
        this.CheckBubbleHitSuperJelly(i);
    }

    finSlapHit() {
        let i = 0;
        this.CheckFinSlapHitPufferFish(i);
    }

    poisonBubbleHit() {
        let i = 0;
        this.CheckPoisonBubbleHitEndboss(i);
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

    bubbleDelay() {
        if (this.alreadyThrow) {
            this.alreadyThrow = false;
            setTimeout(() => {
                this.lastBubble = false;
            }, 500);
        }
    }


    // ####################################################


    /**
     * excluded functions - (to compress logic code)
     */

    ThrowStandardBubble() {
        this.lastBubble = true;
        if (this.character.otherDirection == true) {
            let bubble = new ThrowableObject(this.character.x, this.character.y + 110, this.character.otherDirection);
            this.throwingBubble.push(bubble);

        } else {
            let bubble = new ThrowableObject(this.character.x + 140, this.character.y + 110, this.character.otherDirection);
            this.throwingBubble.push(bubble);
        }
    }

    ThrowPoisonBubble() {
        this.lastBubble = true;
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
        characterHitByPufferFish.play();
        this.character.hit();
        this.healthbar.setPercentage(this.character.energy);
    }

    DamageFromJellyfish() {
        characterHitByJellyFish.play();
        this.character.hit();
        this.healthbar.setPercentage(this.character.energy);
    }

    DamgeFromSuperJellyfish() {
        characterHitByJellyFish.play();
        this.character.hitBySuperJellyAndBoss();
        this.healthbar.setPercentage(this.character.energy);
    }

    DamageFromEndboss() {
        characterHitByPufferFish.play();
        this.character.hitBySuperJellyAndBoss();
        this.healthbar.setPercentage(this.character.energy);
    }

    pufferFishHitAndKill(pufferFish, i) {
        slap_sound.play();
        pufferFish.hitPufferFish();
        pufferFish.pufferFishIsDead();
        setTimeout(() => {
            this.level.pufferFish.splice(i, 1);
        }, 3000);
        console.log(pufferFish);
    }

    jellyFishHitAndKill(jellyFish, i) {
        bubble_sound.play();
        jellyFish.hitJellyFish();
        jellyFish.jellyFishIsDead();
        this.throwingBubble.splice(i, 1);
        setTimeout(() => {
            this.level.jellyFish.splice(i, 1);
        }, 3000);
        console.log(jellyFish);
    }

    superJellyFishHitAndKill(superJellyFish, i) {
        bubble_sound.play();
        superJellyFish.hitSuperJellyFish();
        superJellyFish.superJellyFishIsDead();
        this.throwingBubble.splice(i, 1);
        setTimeout(() => {
            this.level.superJellyFish.splice(i, 1);
        }, 3000);
        console.log(superJellyFish);
    }

    endBossHitAndKillWithStandard(endBoss, i) {
        bubble_sound.play();
        endBoss.hitEndbossWithNormalBubble();
        this.throwingBubble.splice(i, 1);
        this.healthbarBoss.setPercentage(endBoss.bossEnergy);
        endBoss.endBossIsDead();
        console.log(endBoss);
    }

    endBossHitAndKillWithPoison(endBoss, i) {
        bubble_sound.play();
        endBoss.hitEndboss();
        this.healthbarBoss.setPercentage(endBoss.bossEnergy);
        endBoss.endBossIsDead();
        this.throwingPoisonBubble.splice(i, 1);
    }

    increaseCoinbar(i) {
        coin_sound.play();
        this.character.addCoinToBar();
        this.coinbar.setPercentage(this.character.coin);
        this.level.coins.splice(i, 1);
    }

    increasePoisonbar(i) {
        this.poisonBubbles++;
        bottle_sound.play();
        this.character.addPoisonflaskToBar();
        this.poisonbar.setPercentage(this.character.poison);
        this.level.flasks.splice(i, 1);
    }

    characterCanThrowBubble() {
        return this.keyboard.D && !this.lastBubble;
    }

    characterCanThrowPoisonBubble() {
        return this.keyboard.F && this.poisonBubbles > 0 && !this.lastBubble;
    }

    characterAttackPufferFish(pufferFish) {
        return this.character.attackWithFinslap(pufferFish) && this.keyboard.SPACE;
    }

    CheckFinSlapHitPufferFish(i) {
        this.level.pufferFish.forEach((pufferFish) => {
            if (this.characterAttackPufferFish(pufferFish) && !this.level.pufferFish.alreadyHitten) {
                this.resetAlreadyHittenPufferFish();
                this.pufferFishHitAndKill(pufferFish, i);
            }
            this.throwingBubble.forEach((bubble) => {
                if (bubble.isColliding(pufferFish)) {
                    this.throwingBubble.splice(i, 1);
                }
            })
        })        
    }

    CheckBubbleHitNormalJelly(i) {
        this.level.jellyFish.forEach((jellyFish) => {
            this.throwingBubble.forEach((bubble) => {
                if (bubble.isColliding(jellyFish) && !this.alreadyHitten) {
                    this.resetAlreadyHittenJellyFish();
                    this.jellyFishHitAndKill(jellyFish, i);
                }
            })
        })
    }

    CheckBubbleHitSuperJelly(i) {
        this.level.superJellyFish.forEach((superJellyFish) => {
            this.throwingBubble.forEach((bubble) => {
                if (bubble.isColliding(superJellyFish) && !this.alreadyHitten) {
                    this.resetAlreadyHittenSuperJellyFish();
                    this.superJellyFishHitAndKill(superJellyFish, i);
                }
            })
        })
    }

    CheckPoisonBubbleHitEndboss(i) {
        if (this.characterIsNotInRange()) {
            return;
        }
        this.character.hadFirstContact = true;
        this.level.endBoss.forEach((endBoss) => {
            this.endBossHitWithStandardBubble(endBoss, i);
            this.endbossHitWithPoisonBubble(endBoss, i);
        })
    }

    characterIsNotInRange() {
        return this.character.x <= 1800 && !this.character.hadFirstContact;
    }

    endBossHitWithStandardBubble(endBoss, i) {
        this.throwingBubble.forEach((bubble) => {
            if (bubble.isColliding(endBoss) && !this.level.endBoss.alreadyHitten) {
                this.resetAlreadyHittenEndboss();
                this.endBossHitAndKillWithStandard(endBoss, i);
            }
        })
    }

    endbossHitWithPoisonBubble(endBoss, i) {
        this.throwingPoisonBubble.forEach((poisonBubble) => {
            if (poisonBubble.isColliding(endBoss) && !this.level.endBoss.alreadyHitten) {
                this.resetAlreadyHittenEndboss();
                this.endBossHitAndKillWithPoison(endBoss, i);
            }
        })
    }

    resetAlreadyHittenPufferFish() {
        this.level.pufferFish.alreadyHitten = true;
        setTimeout(() => {
            this.level.pufferFish.alreadyHitten = false;
        }, 400);
    }  

    resetAlreadyHittenJellyFish() {
        this.level.jellyFish.alreadyHitten = true;
        setTimeout(() => {
            this.level.jellyFish.alreadyHitten = false;
        }, 400);
    }  

    resetAlreadyHittenSuperJellyFish() {
        this.level.superJellyFish.alreadyHitten = true;
        setTimeout(() => {
            this.level.superJellyFish.alreadyHitten = false;
        }, 400);
    }  

    resetAlreadyHittenEndboss() {
        this.level.endBoss.alreadyHitten = true;
        setTimeout(() => {
            this.level.endBoss.alreadyHitten = false;
        }, 400);
    }  

}