class World {

    character = new Character();
    ambient_Sound = new Audio('audio/underwater.wav');
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
 

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');        
        this.keyboard = keyboard;
        this.canvas = canvas;
          
        this.draw();               
        this.setWorld();     
        this.CheckCollisions();
    }
    

    setWorld() {
        this.character.world = this;
    }

    CheckCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
               if(this.character.isColliding(enemy)) {                
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);                
               }
            })
        }, 200)
    }

    draw() {        
        this.ambient_Sound.play();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);        
        this.addObjectToCanvas(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);        
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
            this.addToMap(o);
        });
    }

    addToMap(mo) {        
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.drawImage(this.ctx);        
        mo.drawOutlines(this.ctx);

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