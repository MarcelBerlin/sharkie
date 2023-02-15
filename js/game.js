let intervalIDs = [];
let canvas;
let world;
let keyboard = new Keyboard();
let gameSpeed = 10;

let youWinSound = new Audio('audio/winsound.mp3');
let awww = new Audio('audio/aww.mp3');
let ambient_Sound = new Audio('audio/underwater.wav');
let game_Sound = new Audio('audio/sharkieanthem_short.mp3');
let bossAnthem = new Audio('audio/bossanthem.mp3');
let swimming_sound = new Audio('audio/swim.mp3');
let coin_sound = new Audio('audio/coins.wav');
let slap_sound = new Audio('audio/slap.wav');
let characterHitByPufferFish = new Audio('audio/hit.wav');
let characterHitByJellyFish = new Audio('audio/electroshock.wav');
let bubble_sound = new Audio('audio/bubble.wav');
let bottle_sound = new Audio('audio/bottle.wav');
let biteAttack = new Audio('audio/bite.wav');
let splashJump = new Audio('audio/splash.wav');


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    level1 = createLevel1(world);
    DisplayShowHidden();
    playBackgroundSound();    
    showMobileBtn();
}

function restartGame() {
    exitFullscreen();
    reloadMusic();
    init();
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
    document.getElementById('homebutton').style.display = 'flex';
    document.getElementById('mute').style.display = 'flex';
    document.getElementById('ingameMoveOrders').style.display = 'flex';    
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

function fullScreen() {
    let fullscreen = document.getElementById('fullScreen');
    enterFullscreen(fullscreen);
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
    addStylesForFullScreen();
}


function closeFullScreen() {
    let fullscreen = document.getElementById('fullScreen');
    exitFullscreen(fullscreen);
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    removeStylesFromFullScreen();
}


function addStylesForFullScreen() {
    document.getElementById('homebutton').style.display = 'none';
    document.getElementById('fullscreenbutton').style.display = 'none';
    document.getElementById('closeFullscreen').style.display = 'block';
    document.getElementById('canvas').classList.add('canvasFullScreen');
    document.getElementById('win').classList.add('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
    document.getElementById('lose').classList.add('gameOverScreenFullScreen');
    
}

function removeStylesFromFullScreen() {
    document.getElementById('closeFullscreen').style.display = 'none';
    document.getElementById('homebutton').style.display = 'flex';
    document.getElementById('fullscreenbutton').style.display = 'flex';    
    document.getElementById('canvas').classList.remove('canvasFullScreen');
    document.getElementById('win').classList.remove('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
    document.getElementById('lose').classList.remove('gameOverScreenFullScreen');
}

function toggleMute() {
    toggleNoSoundBtn();
    game_Sound.muted = !game_Sound.muted;
    ambient_Sound.muted = !ambient_Sound.muted;
    bossAnthem.muted = !bossAnthem.muted;
    coin_sound.muted = !coin_sound.muted;
    slap_sound.muted = !slap_sound.muted;
    characterHitByPufferFish.muted = !characterHitByPufferFish.muted;
    characterHitByJellyFish.muted = !characterHitByJellyFish.muted;
    bubble_sound.muted = !bubble_sound.muted;
    bottle_sound.muted = !bottle_sound.muted;
    swimming_sound.muted = !swimming_sound.muted;
    splashJump.muted = !splashJump.muted;
    biteAttack.muted = !biteAttack.muted;
    youWinSound.muted = !youWinSound.muted;
    awww.muted = !awww.muted;
}

function reloadMusic() {
    game_Sound.load();
    ambient_Sound.load();
    bossAnthem.load();        
}

function toggleNoSoundBtn() {
    let img = document.getElementById('mute').src; //= 'img/laut-40.png';

    if (img.indexOf('laut-40.png') != -1) {
        document.getElementById('mute').src = 'img/kein-ton-40.png';
    } else {
        document.getElementById('mute').src = 'img/laut-40.png';
    }

}

function showMobileBtn() {
    document.getElementById('mobileLeftBtn').classList.remove('d-none');
    document.getElementById('mobileRightBtn').classList.remove('d-none');        
}

function hideMobileBtn() {
    document.getElementById('mobileLeftBtn').classList.add('d-none');
    document.getElementById('mobileRightBtn').classList.add('d-none');    
}




function stopGame() {
    intervalIDs.forEach(clearInterval);
}

function loseGame() {
    hideMobileBtn();
    ambient_Sound.pause();
    game_Sound.pause();
    document.getElementById('title').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('lose').style.display = 'flex';
    document.getElementById('fullscreenbutton').style.display = 'none';
    document.getElementById('mute').style.display = 'none';
    document.getElementById('ingameMoveOrders').style.display = 'none';
    document.getElementById('mobileLeftBtn').classList.add('d-none'); 
    awww.play();
}

function winGame() {
    hideMobileBtn();
    ambient_Sound.pause();
    game_Sound.pause();
    bossAnthem.pause();
    document.getElementById('title').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('win').style.display = 'flex';
    document.getElementById('fullscreenbutton').style.display = 'none';
    document.getElementById('mute').style.display = 'none';
    document.getElementById('ingameMoveOrders').style.display = 'none'; 
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
