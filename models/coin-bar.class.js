class CoinBar extends DrawableObject {

   
    IMAGE_COINS = [
        'img/4. Marcadores/green/Coin/0_coin.png',
        'img/4. Marcadores/green/Coin/20_coin.png',
        'img/4. Marcadores/green/Coin/40_coin.png',
        'img/4. Marcadores/green/Coin/60_coin.png',
        'img/4. Marcadores/green/Coin/80_coin.png',
        'img/4. Marcadores/green/Coin/100_coin.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGE_COINS);              
        this.x = 250;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage >= 20) {
            return 1;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage == 100) {
            return 5;
        }
            
        
    }
}


