class MovableObject {
    x = 50;
    y = 100;
    img;
    height = 250;
    width = 200;    
       

    loadImage(path){
        this.img = new Image(); // this.img = document.getElementById('image) <img id="image" src> <-- ist genau das gleiche!
        this.img.src = path;
    }

    swimRight() {
        console.log('Swimming Right');
        
    }

    
    swimLeft() {
        console.log('Swimming Left');
    }
    
}

