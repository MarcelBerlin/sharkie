class CoinBar extends DrawableObject {


    IMAGE_COINBAR = [
        'img/4. Marcadores/Purple/0_coin_purple.png',
        'img/4. Marcadores/Purple/20_coin_purple.png',
        'img/4. Marcadores/Purple/40_coin_purple.png',
        'img/4. Marcadores/Purple/60_coin_purple.png',
        'img/4. Marcadores/Purple/80_coin_purple.png',
        'img/4. Marcadores/Purple/100_coin_purple.png'

    ];


    constructor() {
        super().loadImages(this.IMAGE_COINBAR);
        this.width = 200;
        this.height = 50;
        this.y = 35;
        this.x = 25;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_COINBAR[this.showImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    showImageIndex(percentage) {
        if (percentage == 5) {
            return 5;
        } else if (percentage == 4) {
            return 4;
        } else if (percentage == 3) {
            return 3;
        } else if (percentage == 2) {
            return 2;
        } else if (percentage == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}


