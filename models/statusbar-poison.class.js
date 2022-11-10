class PoisonBar extends StatusBar {
    x = 475;

    IMAGE_STATUSBAR = [
        'img/4. Marcadores/green/poisoned bubbles/0_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/20_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/40_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/60_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/80_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/100_poison.png',

    ];   

    constructor() {
        super().loadImages(this.IMAGE_STATUSBAR);       
        this.setPercentage(0);
    }

  
}


