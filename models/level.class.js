class Level {
    pufferFish;
    jellyFish;
    endBoss;
    lights;
    backgroundObjects;
    flasks;
    coins;
    level_end_x = 2200;    
    

    constructor(pufferFish, jellyFish, endBoss, lights, backgroundObjects, flasks, coins) {
        this.pufferFish = pufferFish;
        this.jellyFish = jellyFish;
        this.endBoss = endBoss;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.flasks = flasks;
        this.coins = coins;
    }

}