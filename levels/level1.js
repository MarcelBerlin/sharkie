
const level1 = new Level(

        [
            new PufferFishGreen(),            
            new PufferFishRed(),        
            new PufferFishPurple(),          
        ],
        [
            new JellyFishPurple(),
            new JellySuperdangerousGreen(),
        ],
        [
            new EndBoss(), 
        ],
        [
            new LightBeam(),
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1439),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1439),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1439),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -1439),

            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 0),

            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 1439),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 1439),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1439),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1439),

        ],
        [
            new PoisonflaskGround(),
            new PoisonflaskAnimated(),
            new PoisonflaskGround(),
            new PoisonflaskAnimated(),
            new PoisonflaskGround(),
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            
        ],
        

    );

