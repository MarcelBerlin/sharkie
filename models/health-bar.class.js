class HealthBar extends DrawableObject {

    IMAGE_STATUSBAR = [
        'img/4. Marcadores/green/Life/100.png',
        'img/4. Marcadores/green/Life/80.png',
        'img/4. Marcadores/green/Life/60.png',
        'img/4. Marcadores/green/Life/40.png',
        'img/4. Marcadores/green/Life/20.png',
        'img/4. Marcadores/green/Life/0.png',
    ];

   
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGE_STATUSBAR);     
        this.x = 25;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else {
            return 5;
        }
    }
}


