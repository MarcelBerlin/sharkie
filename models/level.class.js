class Level {
    enemies;
    lights;
    backgroundObjects;
    flasks;
    coins;
    level_end_x = 2200;
    
    

    constructor(enemies, lights, backgroundObjects, flasks, coins) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.flasks = flasks;
        this.coins = coins;
        
    }

}