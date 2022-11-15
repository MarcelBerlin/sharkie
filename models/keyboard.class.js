class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

   
    checkKey(e) {

        e = e || window.event;

        if (e.keyCode == 'ArrowUp') {
            // up arrow
        }
        else if (e.keyCode == 'ArrowDown') {
            // down arrow
        }
        else if (e.keyCode == 'ArrowLeft') {
            // left arrow
        }
        else if (e.keyCode == 'ArrowRight') {
            // right arrow
        }
        else if (e.keyCode == 'Space') {
            // space
        } 
        else if (e.keyCode == 'KeyD') {
            // KeyD
        }
    }
}

