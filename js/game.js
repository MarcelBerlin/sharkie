let intervalIDs = [];
let canvas;
let world;
let keyboard = new Keyboard();
let gameSpeed = 10;

let youWinSound = new Audio('audio/winsound.mp3');
let losesound = new Audio('audio/losehorn.wav');
let awww = new Audio('audio/aww.mp3');
let ambient_Sound = new Audio('audio/underwater.wav');
let game_Sound = new Audio('audio/sharkieanthem_short.mp3');
let bossAnthem = new Audio('audio/bossanthem.mp3');


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    level1 = createLevel1(world);
    DisplayShowHidden();
    playBackgroundSound();
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDs.push(id);

}

function DisplayShowHidden() {
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('tutorial').style.display = 'none';
    document.getElementById('fullscreenbutton').style.display = 'flex';
}

function howToPlay() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('tutorial').style.display = 'flex';
    document.getElementById('startscreen').style.display = 'none';

}

function backToMenu() {
    document.getElementById('title').style.display = 'block';
    document.getElementById('tutorial').style.display = 'none';
    document.getElementById('startscreen').style.display = 'flex';
}

function reloadPage() {
    window.location.reload();
}

function fullscreenToggle() {
    canvas.requestFullscreen()
}

function stopGame() {
    intervalIDs.forEach(clearInterval);
}

function loseGame() {
    ambient_Sound.pause();
    game_Sound.pause();
    document.getElementById('title').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('lose').style.display = 'flex';
    document.getElementById('fullscreenbutton').style.display = 'none';
    losesound.play();
    awww.play();
}

function winGame() {
    ambient_Sound.pause();
    game_Sound.pause();
    bossAnthem.pause();
    document.getElementById('title').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('win').style.display = 'flex';
    document.getElementById('fullscreenbutton').style.display = 'none';
    youWinSound.play(); 
}

function playBackgroundSound() {
    ambient_Sound.play();
    game_Sound.play();
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }

    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
    }

    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }

    if (event.key == ' ') {
        keyboard.SPACE = true; 
    }

    if (event.key == 'd') {
        keyboard.D = true;
    }

    if (event.key == 'f') {
        keyboard.F = true;
    }


});

window.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }

    if (event.key == 'ArrowUp') {
        keyboard.UP = false;
    }

    if (event.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }

    if (event.key == ' ') {
        keyboard.SPACE = false;
    }

    if (event.key == 'd') {
        keyboard.D = false;
    }

    if (event.key == 'f') {
        keyboard.F = false;
    }


});
