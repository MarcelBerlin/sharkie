class Level {
    pufferFish;
    jellyFish;
    superJellyFish;
    endBoss;
    lights;
    backgroundObjects;
    flasks;
    coins;
    level_end_x = 2130;    
    

    constructor(pufferFish, jellyFish, superJellyFish, endBoss, lights, backgroundObjects, flasks, coins) {
        this.pufferFish = pufferFish;
        this.jellyFish = jellyFish;
        this.superJellyFish = superJellyFish;
        this.endBoss = endBoss;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.flasks = flasks;
        this.coins = coins;
    }

}