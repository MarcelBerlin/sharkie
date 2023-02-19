class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    hadFirstContact = false; 
    min_Y = 30;
    max_Y = 325;
    speedY = 0.15;
    acceleration = 0.25;
    energy = 50;
    coin = 0;
    poison = 0;
    pufferFishEnergy = 10;
    jellyFishEnergy = 10;
    superJellyFishEnergy = 10;
    bossEnergy = 50;
    lastHit = 0;
    lastBubble = 0;
    
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }


    applyGravity() {
        setStoppableInterval(() => {
            if (this.y <= this.max_Y + 75) {
                this.y -= this.speedY;
            }
        }, 1000 / 25);
    }

    swimLeft() {
        this.x -= this.speed;

    }

    swimRight() {
        this.x += this.speed;

    }

    swimUp() {
        setStoppableInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60);
    }

    swimDown() {
        setStoppableInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    
    // Collision Detection #####################

    isColliding(movableObject) {
        return this.x + this.width - this.offset.right > movableObject.x + movableObject.offset.left &&
            this.y + this.height - this.offset.bottom > movableObject.y + movableObject.offset.top &&
            this.x + this.offset.left < movableObject.x + movableObject.width - movableObject.offset.right &&
            this.y + this.offset.top < movableObject.y + movableObject.height - movableObject.offset.bottom;
    }

    // attackWithFinslap (enemy)

    attackWithFinslap(movableObject) {
        return this.x + this.width > movableObject.x && this.x < movableObject.x + movableObject.width && this.y + this.height > movableObject.y && this.y + 100 < movableObject.y + movableObject.height;
    }

    addCoinToBar() {
        this.coin += 1;
        if (this.coin <= 0) {
            this.coin = 0
        }
    }

    addPoisonflaskToBar() {
        this.poison += 1;
        if (this.poison <= 0) {
            this.poison = 0;
        }
    }

    removePoisonFromBar() {
        this.poison -= 1;
    }    

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }  console.log(this.energy);       
    }

    hitBySuperJellyAndBoss() {
        this.energy -= 10;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }  console.log(this.energy);  
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms zum letzten Hit 
        timepassed = timepassed / 1000; // Differenz in sek              
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;

    }

    characterIsNear() {
        return world.character.x + 200 > this.x && world.character.y + 200 > this.y && world.character.x - 200 < this.x && world.character.y - 50 < this.y;
    }

    hitPufferFish() {
        this.pufferFishEnergy -= 10;
        if (this.pufferFishEnergy <= 0) {
            this.pufferFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    pufferFishIsDead() {
        return this.pufferFishEnergy == 0;
    }

    hitJellyFish() {
        this.jellyFishEnergy -= 10;
        if (this.jellyFishEnergy <= 0) {
            this.jellyFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    jellyFishIsDead() {
        return this.jellyFishEnergy == 0;
    }

    hitSuperJellyFish() {
        this.superJellyFishEnergy -= 10;
        if (this.superJellyFishEnergy <= 0) {
            this.superJellyFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    superJellyFishIsDead() {
        return this.superJellyFishEnergy == 0;
    }

    hitEndbossWithNormalBubble() {
        this.bossEnergy -= 2;
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitEndboss() {
        this.bossEnergy -= 10;
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    endBossIsDead() {
        return this.bossEnergy == 0;
    }

    getTimeForLastBubble() {
        this.lastBubble = new Date().getTime();
    }  


}

