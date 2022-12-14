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
        bottom: 30,
        left: 30,
        right: 30
    }
    world;
    hadFirstContact = false;
    biteAttack = new Audio('audio/bite.wav');
    splashJump = new Audio('audio/splash.wav');




    constructor(world) {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.world = world;
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2200;
        this.y = -50;
        this.speed = 30;
        this.animate();
        // this.isHittenByBubble();
        // this.isDefeated();

    }


    animate() {
        let i = 0
        setInterval(() => {
            if (world.character.x > 1800 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
                setInterval(() => {
                    world.game_Sound.pause();
                    world.bossAnthem.play();
                    if (i < 10) {
                        this.playAnimation(this.IMAGES_INTRODUCE);
                        this.splashJump.play();
                    } else {
                        this.playAnimation(this.IMAGES_FLOATING);
                        this.attackCharacter();
                        this.swimLeft();
                    }
                    i++;
                }, 100);


            }
        }, 100);

    }

    // world - funktioniert hier !! #######################

    attackCharacter() {
        setInterval(() => {
            if (world.character.x + 250 > this.x) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.biteAttack.play();
            }
           
        }, 100);
    }

    swimLeft() {
        setTimeout(() => {
            this.x -= 2.5;
        }, 500);
    }

    // world - funktioniert hier NICHT!!! ##################

    isHittenByBubble() {
        setInterval(() => {
            if (this.bossEnergy < 50) {
                this.playAnimation(this.IMAGES_HURT);
            }
        }, 100)
    }
    // ####################################

    isDefeated() {
        if (this.bossEnergy == 0) {
            setInterval(() => {
                this.playAnimation(this.IMAGES_DEAD);
            }, 100);

            setTimeout(() => {
                world.character.clearAllIntervals();
            }, 500);
        }
    }





   



}