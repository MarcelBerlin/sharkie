class StatusBar extends DrawableObject {

  IMAGES_HEALTHBAR = [
    'img/4. Marcadores/green/Life/100_  copia 2.png',
    'img/4. Marcadores/green/Life/80_  copia 2.png',
    'img/4. Marcadores/green/Life/60_  copia 2.png',
    'img/4. Marcadores/green/Life/40_  copia 2.png',
    'img/4. Marcadores/green/Life/20_  copia 2.png',
    'img/4. Marcadores/green/Life/0_  copia 2.png',

  ];
  percentage = 100;


  constructor() {
    this.loadImage(this.IMAGES_HEALTHBAR);
  };

  setPercantage(percentage) {
    this.percentage = percentage;

    if(this.percentage == 100)
  }
}