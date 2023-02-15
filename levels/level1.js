
let level1;

function createLevel1(world) {

    return new Level(

        [
            new PufferFishGreen(world),
            new PufferFishRed(world),
            new PufferFishPurple(world),
        ],
        [
            new JellyFishPurple(world),
            new JellyFishYellow(world),
        ],
        [
            new JellySuperdangerousGreen(world),
        ],
        [
            new EndBoss(world),
        ],
        [
            new LightBeam(world),
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1440),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1440),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1440),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -1440),

            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 0),

            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 1440),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 1440),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1440),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1440),

        ],
        [
            
            new PoisonflaskAnimated(world),
            new PoisonflaskGround(world),
            new PoisonflaskAnimated(world),
            new PoisonflaskGround(world),
            new PoisonflaskAnimated(world),            

        ],
        [
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world),
            new Coin(world),

        ],
    );
};



