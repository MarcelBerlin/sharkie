class HealthBarBoss extends DrawableObject {


    IMAGE_HEALTHBAR = [       

        'img/4. Marcadores/orange/0_health_orange.png',
        'img/4. Marcadores/orange/20_health_orange.png',
        'img/4. Marcadores/orange/40_health_orange.png',
        'img/4. Marcadores/orange/60_health_orange.png',
        'img/4. Marcadores/orange/80_health_orange.png',
        'img/4. Marcadores/orange/100_health_orange.png',
    ];


    constructor() {
        super().loadImages(this.IMAGE_HEALTHBAR);
        this.width = 200;
        this.height = 50;
        this.y = 50;
        this.x = 580;
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
        } else if (percentage > 1) {
            return 1;
        } else {
            return 0;
        }
    }
}


