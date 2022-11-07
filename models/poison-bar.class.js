class PoisonBar extends DrawableObject {

    IMAGE_POISON = [
        'img/4. Marcadores/green/poisoned bubbles/0_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/20_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/40_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/60_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/80_poison.png',
        'img/4. Marcadores/green/poisoned bubbles/100_poison.png',

    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGE_POISON);       
        this.x = 475;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_POISON[this.resolveImageIndex()];
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


