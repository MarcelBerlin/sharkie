let intervalIDs = [];
let canvas;
let world;
let keyboard = new Keyboard();
let gameSpeed = 10;

let youWinSound = new Audio('audio/winsound.mp3');
let awww = new Audio('audio/aww.mp3');
let ambient_Sound = new Audio('audio/underwater.mp3');
let game_Sound = new Audio('audio/sharkieanthem_short.mp3');
let bossAnthem = new Audio('audio/bossanthem.mp3');
let swimming_sound = new Audio('audio/swim.mp3');
let coin_sound = new Audio('audio/coins.mp3');
let slap_sound = new Audio('audio/slap.mp3');
let characterHitByPufferFish = new Audio('audio/hit.mp3');
let characterHitByJellyFish = new Audio('audio/electroshock.mp3');
let bubble_sound = new Audio('audio/bubble.mp3');
let bottle_sound = new Audio('audio/bottle.mp3');
let biteAttack = new Audio('audio/bite.mp3');
let splashJump = new Audio('audio/splash.mp3');



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    level1 = createLevel1(world);    
    DisplayShowHidden();
    playBackgroundSound();    
    showMobileBtn();
}

function restartGame() {
    checkForFullscreen();
    reloadMusic();
    init();
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDs.push(id);

}


function DisplayShowHidden() {
    checkForFullscreen();
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('tutorial').style.display = 'none';    
    document.getElementById('mute').style.display = 'flex';
    document.getElementById('ingameMoveOrders').style.display = 'flex';    
}


function toggleMenuScreen(screen) {
    if (screen === 'how-to-play') {
      document.getElementById('title').style.display = 'none';
      document.getElementById('tutorial').style.display = 'flex';
      document.getElementById('startscreen').style.display = 'none';
    } else if (screen === 'back-to-menu') {
      document.getElementById('title').style.display = 'block';
      document.getElementById('tutorial').style.display = 'none';
      document.getElementById('startscreen').style.display = 'flex';
    }
  }


function reloadPage() {
    window.location.reload();
}

function checkForFullscreen() {
    if (document.fullscreenElement) {
        document.getElementById('homebutton').style.display = 'none';
        document.getElementById('fullscreenbutton').style.display = 'none';
    } else {
        document.getElementById('homebutton').style.display = 'flex';
        document.getElementById('fullscreenbutton').style.display = 'flex';
    }
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
    switchStylesForFullscreen('addStylesFullscreen');
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
    switchStylesForFullscreen('removeStylesFullscreen');
}


function switchStylesForFullscreen(styles) {
    if (styles === 'addStylesFullscreen') {
        ingameSwitchButtons('fullscreenON');
        canvasWinAndLoseWindow('fullscreenOPEN');
    } else if (styles === 'removeStylesFullscreen') {
        ingameSwitchButtons('fullscreenOFF');
        canvasWinAndLoseWindow('fullscreenEXIT');
    }
}

function ingameSwitchButtons(ingameSwitch) {
    if (ingameSwitch === 'fullscreenON') {
        document.getElementById('homebutton').style.display = 'none';
        document.getElementById('fullscreenbutton').style.display = 'none';
        document.getElementById('closeFullscreen').style.display = 'block';
    } else if (ingameSwitch === 'fullscreenOFF') {
        document.getElementById('closeFullscreen').style.display = 'none';
        document.getElementById('homebutton').style.display = 'flex';
        document.getElementById('fullscreenbutton').style.display = 'flex'; 
    }
}

function canvasWinAndLoseWindow(window) {
    if (window === 'fullscreenOPEN') {
        document.getElementById('canvas').classList.add('canvasFullScreen');
        document.getElementById('win').classList.add('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
        document.getElementById('lose').classList.add('gameOverScreenFullScreen');
    } else if (window === 'fullscreenEXIT') {
        document.getElementById('canvas').classList.remove('canvasFullScreen');
        document.getElementById('win').classList.remove('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
        document.getElementById('lose').classList.remove('gameOverScreenFullScreen');
    }
}

function toggleMute() {
    toggleNoSoundBtn();
    muteBackGroundMusic();
    muteAnimationSounds();
    muteCollectableItems();
    muteAttackSounds();
    muteCreditSound();   
}

function muteBackGroundMusic() {
    game_Sound.muted = !game_Sound.muted;
    ambient_Sound.muted = !ambient_Sound.muted;
    bossAnthem.muted = !bossAnthem.muted;
}

function muteAnimationSounds() {
    bubble_sound.muted = !bubble_sound.muted;
    swimming_sound.muted = !swimming_sound.muted;
    splashJump.muted = !splashJump.muted;
}

function muteCollectableItems() {
    coin_sound.muted = !coin_sound.muted;
    bottle_sound.muted = !bottle_sound.muted;
}

function muteAttackSounds() {
    slap_sound.muted = !slap_sound.muted;
    characterHitByPufferFish.muted = !characterHitByPufferFish.muted;
    characterHitByJellyFish.muted = !characterHitByJellyFish.muted;
    biteAttack.muted = !biteAttack.muted;
}

function muteCreditSound() {
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
    winOrLose();
    document.getElementById('lose').style.display = 'flex';
    ambient_Sound.pause();
    game_Sound.pause();
    bossAnthem.pause();    
    awww.play();
}

function winGame() {
    hideMobileBtn();
    winOrLose();
    document.getElementById('win').style.display = 'flex';
    ambient_Sound.pause();
    game_Sound.pause();
    bossAnthem.pause();    
    youWinSound.play();
}

function winOrLose() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';    
    document.getElementById('homebutton').style.display = 'none';
    document.getElementById('fullscreenbutton').style.display = 'none';
    document.getElementById('mute').style.display = 'none';
    document.getElementById('ingameMoveOrders').style.display = 'none'; 
    document.getElementById('mobileLeftBtn').classList.add('d-none'); 
    document.getElementById('mobileRightBtn').classList.add('d-none'); 
}

function playBackgroundSound() {
    ambient_Sound.play();
    game_Sound.play();
}

/**
 * Keyboard trigger DOWN
 */

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

/**
 * Keyboard trigger UP
 */

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
