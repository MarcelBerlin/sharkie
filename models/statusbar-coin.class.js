class CoinBar extends StatusBar {

    x = 250;

    IMAGE_STATUSBAR = [
        'img/4. Marcadores/Purple/0_coin_purple.png',
        'img/4. Marcadores/Purple/20_coin_purple.png',
        'img/4. Marcadores/Purple/40_coin_purple.png',
        'img/4. Marcadores/Purple/60_coin_purple.png',
        'img/4. Marcadores/Purple/80_coin_purple.png',
        'img/4. Marcadores/Purple/100_coin_purple.png'
        
    ];


    constructor() {
        super().loadImages(this.IMAGE_STATUSBAR);
        this.setPercentage(0);
    }

}


