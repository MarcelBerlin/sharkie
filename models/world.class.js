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
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D1.png', 0, 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToCanvas(this.character);
        this.addObjectToCanvas(this.lights);
        this.addObjectToCanvas(this.enemies);
        this.addObjectToCanvas(this.backgroundObjects);
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}