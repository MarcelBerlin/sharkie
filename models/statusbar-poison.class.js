class PoisonBar extends StatusBar {
    x = 475;

    IMAGE_STATUSBAR = [
        'img/4. Marcadores/orange/0_poison_orange.png',
        'img/4. Marcadores/orange/20_poison_orange.png',
        'img/4. Marcadores/orange/40_poison_orange.png',
        'img/4. Marcadores/orange/60_poison_orange.png',
        'img/4. Marcadores/orange/80_poison_orange.png',
        'img/4. Marcadores/orange/100_poison_orange.png'

    ];   

    constructor() {
        super().loadImages(this.IMAGE_STATUSBAR);       
        this.setPercentage(0);
    }

  
}


