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
    throwableObject = [];    
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
        this.swimAndAttack();
        this.ambient_Sound.play();
        this.game_Sound.play();
        
    }


    setWorld() {
        this.character.world = this;
    }


    swimAndAttack() {
        setInterval(() => {
            this.CheckCollisions();
            this.CheckBubbleCollision();
        }, 200)
    }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let bubble = new ThrowableObject(this.character.x + 140, this.character.y + 110);
            this.throwableObject.push(bubble);
        }
    }


    CheckCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        })
    }

    CheckBubbleCollision() {
        this.checkThrowObjects();
        this.level.enemies.forEach((enemy) => {
            if (this.bubble.isColliding(enemy)) {
                console.log(enemy);
            }
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
        this.addObjectToCanvas(this.throwableObject);
        this.addToMap(this.character);
        this.addObjectToCanvas(this.level.enemies);
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