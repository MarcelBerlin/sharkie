class EndBoss extends MovableObject {

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',

    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/1.png',
        'img/2.Enemy/3 Final Enemy/Dead/2.png',
        'img/2.Enemy/3 Final Enemy/Dead/3.png',
        'img/2.Enemy/3 Final Enemy/Dead/4.png',
        'img/2.Enemy/3 Final Enemy/Dead/5.png',
        'img/2.Enemy/3 Final Enemy/Dead/6.png'
    ];

    height = 450;
    width = 450;
    offset = {
        top: 175,
        bottom: 50,
        left: 30,
        right: 30
    }
    world;       
    speedAfterHit = 30;




    constructor(world) {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.world = world;
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2200;
        this.y = 0;
        this.speed = 30;
        this.animate();

    }


    // endboss logic -------------------------------- # 

    animate() {
        let i = 0
        setStoppableInterval(() => {            
            if (this.charackterIsInRange()) {
                i = 0;                
                this.hadFirstContact = true;
                this.activateBossSound();
                setStoppableInterval(() => {
                    this.bossSpawnAndAttackCharackter(i);
                    i++;
                }, 100);
            }            
        }, 100);
    }

    bossSpawnAndAttackCharackter(i) {
        if (i < 10) {
            this.BossSpawning();
        } else {
            this.BossAttackAndSwim();
        }
    }


    attackCharacter() {
        if (world.character.x + 250 > this.x) {
            this.playAnimation(this.IMAGES_ATTACK);
            biteAttack.play();
        }
    }

    swimLeft() {
        setTimeout(() => {
            this.x -= 7.5;
        }, 200);
    }


    isHittenByBubble() {
        if (this.bossEnergy < 50 && this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        }
    }

    isDefeated() {
        if (this.bossEnergy == 0) {
            this.playAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                winGame();
                stopGame();
            }, 500);
            biteAttack.pause();
        }
    }

    checkIfCharacterIsBehindBoss() {
        if (world.character.x > this.x + 150) {
            world.character.energy = 0;
            if (world.character.isDead()) {
                loseGame();
            }
        }
    }

    // excluded functions -------------------------------- # 

    charackterIsInRange() {
        return world.character.x > 1800 && !this.hadFirstContact;
    }
       
    BossSpawning() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        splashJump.play();
    }

    BossAttackAndSwim() {
        this.playAnimation(this.IMAGES_FLOATING);
        this.attackCharacter();
        this.swimLeft();
        this.isHittenByBubble();
        this.isDefeated();
        this.checkIfCharacterIsBehindBoss();
    }

    activateBossSound() {
        game_Sound.pause();
        bossAnthem.play();
    }

}