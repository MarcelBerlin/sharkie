class BackgroundObject extends MovableObject {

    width = 1440;
    height = 480;

    constructor(imagepath, x) {
        super().loadImage(imagepath);
        this.x = x; 
        this.y = 480 - this.height;
        
    }    

    

}