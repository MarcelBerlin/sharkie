class LightBeam extends MovableObject {
    
    y = 0;
    width = 400;    
    
    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');

        this.x = 200 + Math.random() * 500;   
       
    }
}