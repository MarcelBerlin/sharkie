class PufferFishGreen extends MovableObject {

    height = 80;
    width = 100;
    world;

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',

    ];

    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead_1.png',

    ];

    constructor(world) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.world = world;
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 500;
        this.y = this.min_Y + 55 + Math.random() * 250;
        this.speed = 0.2 + Math.random() * 0.35;
        this.animate();  

    }


    animate() {
        setStoppableInterval(() => {
            this.swimLeft();
        }, 1000 / 60);
        let i = 0;
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
            if (this.pufferFishEnergy == 0) {
                this.PufferIsKilledByCharacter();
            } else if (this.characterIsNear()) {
                if (i < 5) {
                    this.playAnimation(this.IMAGES_TRANSITION);               
                } else {
                    this.playAnimation(this.IMAGES_BUBBLESWIM);
                }
                i++;
            }    
        }, 100); 
       
    }

    PufferIsKilledByCharacter() {
        this.speed = 0;
        this.y -= 15;
        this.playAnimation(this.IMAGES_DEAD);
    }


   
        
  









}


