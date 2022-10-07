class World {

    character = new Character();
    ambient_Sound = new Audio('audio/underwater.mp3');
    level = level1;    
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
   
    
    constructor(canvas, keyboard) {        
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.draw();
        this.setWorld();     
        
    }


    setWorld() {
        this.character.world = this;          
    }

    draw() {
        this.ambient_Sound.play(); 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectToCanvas(this.level.backgroundObjects);
        
        this.addToCanvas(this.character);
        this.addObjectToCanvas(this.level.enemies);
        this.addObjectToCanvas(this.level.lights);
        
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer und immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToCanvas(object) {
        object.forEach(o => {
            this.addToCanvas(o);
        });
    }

    addToCanvas(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}