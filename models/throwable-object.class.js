class ThrowableObject extends MovableObject {

    world;   

    IMAGE_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];

    IMAGE_BOSS_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png',
    ];
  

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGE_BUBBLE);
        this.loadImages(this.IMAGE_BUBBLE);
        this.loadImages(this.IMAGE_BOSS_BUBBLE);        
        this.x = x;
        this.y = y;                
        this.width = 40;
        this.height = 40;
        this.otherDirection = otherDirection;
        this.BubbleBlow();
        this.PoisonBubbleBlow();

    }

    
    BubbleBlow() {       
        if (world.keyboard.D) { 
            this.playAnimation(this.IMAGE_BUBBLE);            
            setStoppableInterval(() => {                
                this.checkDirectionOfTheCharacter(); 
            }, 25);
            this.getTimeForLastBubble();            
        } 
    }

    PoisonBubbleBlow() {               
        if (world.keyboard.F) {
            this.playAnimation(this.IMAGE_BOSS_BUBBLE);            
            setStoppableInterval(() => {                
               this.checkDirectionOfTheCharacter(); 
            }, 25);
            this.getTimeForLastBubble(); 
        } 
    }

    /**
     * excluded functions
     */

    checkDirectionOfTheCharacter() {
        if (this.otherDirection) {
            this.applyGravity();                    
            this.x -= 10;                    
        } else {
            this.applyGravity();  
            this.otherDirection;
            this.x += 10;                     
        }  
    }

}