class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    constructor(imagepath, x, y) {
        super().loadImage(imagepath);
        this.x = x;
        this.y = y;      
    }
}