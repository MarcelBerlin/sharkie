class PoisonflaskGround extends MovableObject {

  
    width = 50;
    height = 70;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Dark - Left.png');
        this.x = 300 + Math.random() * 1500;
        this.y = 335 + Math.random() * 50;       
    }

   
}