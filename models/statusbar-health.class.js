class HealthBar extends StatusBar {

    x = 25;

    IMAGE_STATUSBAR = [
        
        'img/4. Marcadores/green/Life/0.png',
        'img/4. Marcadores/green/Life/20.png',
        'img/4. Marcadores/green/Life/40.png',
        'img/4. Marcadores/green/Life/60.png',
        'img/4. Marcadores/green/Life/80.png',
        'img/4. Marcadores/green/Life/100.png',
    ];   
  

    constructor() {
        super().loadImages(this.IMAGE_STATUSBAR);
        this.setPercentage(100);
    }
        
}


