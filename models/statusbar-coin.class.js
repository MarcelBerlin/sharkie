class CoinBar extends StatusBar {

    x = 250;

    IMAGE_STATUSBAR = [
        'img/4. Marcadores/green/Coin/0_coin.png',
        'img/4. Marcadores/green/Coin/20_coin.png',
        'img/4. Marcadores/green/Coin/40_coin.png',
        'img/4. Marcadores/green/Coin/60_coin.png',
        'img/4. Marcadores/green/Coin/80_coin.png',
        'img/4. Marcadores/green/Coin/100_coin.png'
    ];


    constructor() {
        super().loadImages(this.IMAGE_STATUSBAR);
        this.setPercentage(0);
    }

}


