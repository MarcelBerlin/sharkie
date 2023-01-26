class LightBeam extends MovableObject {
    
    y = 0;
    width = 1440;   
    speed = 0.15; 
    
    constructor() {
        super().loadImage('img/3. Background/Legacy/Layers/1. Light/3.png');
        this.x = 1000 + Math.random() * 500;   
        this.animate();        
    }


    animate() {
        setStoppableInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}