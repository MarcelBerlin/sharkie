class LightBeam extends MovableObject {
    
    y = 0;
    width = 400;   
    speed = 0.15; 
    
    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');

        this.x = 200 + Math.random() * 500;   
        this.animate();        
    }


    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}