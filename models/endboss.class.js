class EndBoss extends MovableObject {

height = 600;
width = 600;

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];


    constructor() {        
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_INTRODUCE);  
        this.loadImages(this.IMAGES_FLOATING);           
        this.x = 150;        
        this.y = -100;     
        this.animate();              
    }
   
    animate() {
        setInterval(() => {
            let i = this.currentImage;
            let j = this.currentImage % this.IMAGES_FLOATING.length; // Das % Zeichen sorgt für ein wiederholtes itterieren.
            let path1 = this.IMAGES_INTRODUCE[i];
            let path2 = this.IMAGES_FLOATING[j];           
            this.currentImage++;
            if(this.currentImage <= this.IMAGES_INTRODUCE.length) {
                this.img = this.imageCache[path1];
            } else {
                this.img = this.imageCache[path2];
            }
        }, 100);
    }

}