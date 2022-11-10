class StatusBar extends DrawableObject {

    width = 200;
    height = 50;
    y = 0;
    percentage = 100;


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGE_STATUSBAR[this.showImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    showImageIndex(percentage) {
        if (percentage == 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}