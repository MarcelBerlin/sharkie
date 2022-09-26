class World {

    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),

    ];
    lights = [
        new LightBeam(),
    ]
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 25),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),

    ];
    canvas;
    ctx;
    keyboard;
    

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
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectToCanvas(this.backgroundObjects);
        this.addToCanvas(this.character);
        this.addObjectToCanvas(this.enemies);
        this.addObjectToCanvas(this.lights);

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
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection) {
            this.ctx.setTransform(1,0,0,1,0,0);
            mo.x = mo.x * -1;
        }
    }

}