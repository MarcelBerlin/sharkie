class PoisonBar extends DrawableObject {


    IMAGE_POISONBAR = [
        'img/4. Marcadores/orange/0_poison_orange.png',
        'img/4. Marcadores/orange/20_poison_orange.png',
        'img/4. Marcadores/orange/40_poison_orange.png',
        'img/4. Marcadores/orange/60_poison_orange.png',
        'img/4. Marcadores/orange/80_poison_orange.png',
        'img/4. Marcadores/orange/100_poison_orange.png'

    ];

    constructor() {
        super().loadImages(this.IMAGE_POISONBAR);
        this.width = 200;
        this.height = 50;
        this.y = 70;
        this.x = 25;
        this.setPercentage(0);
       
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_POISONBAR[this.showImageIndex(percentage)];
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


