let canvas;
let world;
let keyboard = new Keyboard();
let gameSpeed = 10;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);    
    level1 = createLevel1(world);
    DisplayShowHidden();
}

function DisplayShowHidden() {
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
}




window.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }

    if(e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }

    if(e.key == 'ArrowUp') {
        keyboard.UP = true;
    }

    if(e.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }

    if(e.key == ' ') {
        keyboard.SPACE = true;
    }

    if(e.key == 'd') {
        keyboard.D = true;
    }

    if(e.key == 'f') {
        keyboard.F = true;
    }
    // console.log(e);

});

window.addEventListener('keyup', (e) => {
    if(e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }

    if(e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }

    if(e.key == 'ArrowUp') {
        keyboard.UP = false;
    }

    if(e.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }

    if(e.key == ' ') {
        keyboard.SPACE = false;
    }

    if(e.key == 'd') {
        keyboard.D = false;
    }

    if(e.key == 'f') {
        keyboard.F = false;
    }
    // console.log(e);

});