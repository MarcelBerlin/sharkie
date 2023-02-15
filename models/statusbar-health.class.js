class HealthBar extends DrawableObject {


    IMAGE_HEALTHBAR = [

        'img/4. Marcadores/green/Life/0.png',
        'img/4. Marcadores/green/Life/20.png',
        'img/4. Marcadores/green/Life/40.png',
        'img/4. Marcadores/green/Life/60.png',
        'img/4. Marcadores/green/Life/80.png',
        'img/4. Marcadores/green/Life/100.png',
    ];


    constructor() {
        super().loadImages(this.IMAGE_HEALTHBAR);
        this.width = 200;
        this.height = 50;
        this.y = 0;
        this.x = 25;
        this.setPercentage(50);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_HEALTHBAR[this.showImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    showImageIndex(percentage) {
        if (percentage > 40) {
            return 5;
        } else if (percentage > 30) {
            return 4;
        } else if (percentage > 20) {
            return 3;
        } else if (percentage > 10) {
            return 2;
        } else if (percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}


