class World {

    character = new Character();
    pufferGreen = new PufferFishGreen(this);
    pufferPurple = new PufferFishPurple(this);
    pufferRed = new PufferFishRed(this);
    jellyPurple = new JellyFishPurple(this);
    jellyYellow = new JellyFishYellow(this);
    jellySuperGreen = new JellySuperdangerousGreen(this);
    jellySuperYellow = new JellySuperdangerousPurple(this);
    endBoss = new EndBoss(this);
    healthbar = new HealthBar();
    coinbar = new CoinBar();
    poisonbar = new PoisonBar();
    throwingBubble = [];
    throwingPoisonBubble = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    ambient_Sound = new Audio('audio/underwater.wav');
    game_Sound = new Audio('audio/sharkieanthem_short.mp3');
    bossAnthem = new Audio('audio/bossanthem.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.swimCollectAndAttack();
        this.ambient_Sound.play();
        this.game_Sound.play();

    }


    setWorld() {
        this.character.world = this;
    }


    swimCollectAndAttack() {
        setInterval(() => {
            this.CheckCollisions();
            this.checkThrowObjects();
            this.bubbleHit();
            this.finSlapHit();
            this.poisonBubbleHit();
        }, 300)
    }


    checkThrowObjects() {

            if (this.keyboard.D) {
                let bubble = new ThrowableObject(this.character.x + 140, this.character.y + 110);
                this.throwingBubble.push(bubble);
            }
        
            if (this.keyboard.F) {
                let poisonBubble = new ThrowableObject(this.character.x + 140, this.character.y + 110);
                this.throwingPoisonBubble.push(poisonBubble);
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
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        })
    }

    CheckCollisionJellyFish() {
        this.level.jellyFish.forEach((jellyFish) => {
            if (this.character.isColliding(jellyFish)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        })
    }

    CheckCollisionEndboss() {
        this.level.endBoss.forEach((endBoss) => {
            if (this.character.isColliding(endBoss)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        })
    }

    bubbleHit() {
        let i = 0;

        this.level.jellyFish.forEach((jellyFish, su) => {
            this.throwingBubble.forEach((bubble) => {
                if (bubble.isColliding(jellyFish)) {
                    jellyFish.hitJellyFish();
                    jellyFish.hitSuperJellyFish();
                    jellyFish.jellyFishIsDead();
                    jellyFish.superJellyFishIsDead();
                    console.log(jellyFish);
                    this.throwingBubble.splice(i, 1);
                }
            })
        })
    }

    finSlapHit() {
        this.level.pufferFish.forEach((pufferFish, i) => {
            if (this.character.attackWithFinslap(pufferFish) && this.keyboard.SPACE) {
                pufferFish.hitPufferFish();
                pufferFish.pufferFishIsDead();
                console.log(pufferFish);
            }
        })
    }

    poisonBubbleHit() {
        this.level.endBoss.forEach((endBoss) => {
            this.throwingPoisonBubble.forEach((poisonBubble) => {
                if (poisonBubble.isColliding(endBoss)) {
                    endBoss.hitEndboss();
                    endBoss.endBossIsDead();
                    console.log(endBoss);

                }
            })
        })
    }


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





}