class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

   
    checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
            // left arrow
        }
        else if (e.keyCode == '39') {
            // right arrow
        }
        else if (e.keyCode == '32') {
            // space
        } 
        else if (e.keyCode == '68') {
            // KeyD
        }
    }
}

