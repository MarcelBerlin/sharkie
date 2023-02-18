class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    F = false;
    

    constructor() {
        this.eventTouchpadBtns();
    }

   
    
    eventTouchpadBtns() {
        setTimeout(() => {
            document.getElementById('btnMobileLeft').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.LEFT = true;
            });

            document.getElementById('btnMobileLeft').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.LEFT = false;
            });

            document.getElementById('btnMobileRight').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.RIGHT = true;
            });

            document.getElementById('btnMobileRight').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.RIGHT = false;
            });

            document.getElementById('btnMobileUp').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.UP = true;
            });

            document.getElementById('btnMobileUp').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.UP = false;
            });

            document.getElementById('btnMobileDown').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.DOWN = true;
            });

            document.getElementById('btnMobileDown').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.DOWN = false;
            });

            document.getElementById('btnMobileSlap').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.SPACE = true;
            });

            document.getElementById('btnMobileSlap').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.SPACE = false;
            });

            document.getElementById('btnMobileBubble').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.D = true;
            });

            document.getElementById('btnMobileBubble').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.D = false;
            });

            document.getElementById('btnMobilePoisonBubble').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.F = true;
            });

            document.getElementById('btnMobilePoisonBubble').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.F = false;
            });

        }, 500);
    }
    
}

