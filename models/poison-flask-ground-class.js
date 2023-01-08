class PoisonflaskGround extends MovableObject {

  
    width = 50;
    height = 70;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Dark - Left.png');
        this.x = 400 + Math.random() * 1500;
        this.y = 360;
       
    }

   
}