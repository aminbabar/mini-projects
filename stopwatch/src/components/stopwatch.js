class Stopwatch {
    constructor() {
        this.stopwatchContainer = document.querySelector("#stopwatch");
        this.timer = this.stopwatchContainer.querySelector("#timer");
        this.startButton = this.stopwatchContainer.querySelector("#start-button");
        this.stopButton = this.stopwatchContainer.querySelector("#stop-button");
        this.resetButton = this.stopwatchContainer.querySelector("#reset-button");   
        this.startTime = null;
        // this.intervalId = null;
        this.animationId = null;
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.startButton.addEventListener("click", this.handleStart.bind(this));
        this.stopButton.addEventListener("click", this.handleStop.bind(this));
        this.resetButton.addEventListener("click", this.handleReset.bind(this));
    }


    handleStart() {
        if (this.startTime) {
            this.startTime = this.startTime + performance.now();
        } else {
            this.startTime = performance.now();
        }
        // this.intervalId = setInterval(this.updateTime.bind(this), 0);
        this.updateTime();
        this.startButton.disabled = true;
        this.stopButton.disabled = false;
        this.resetButton.disabled = true;
    }

    handleStop() {
        this.startTime = this.startTime - performance.now();
        // clearInterval(this.intervalId);
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
        this.resetButton.disabled = false;
    }

    handleReset() {
        this.printTime(0,0,0);
        this.resetButton.disabled = true;
        this.startTime = null;
    }


    updateTime() {
        let minutes, seconds, milliSeconds;
        const currentTime = performance.now();
        
        let timeElapsed = currentTime - this.startTime;

        milliSeconds = Math.floor(timeElapsed % 1000);
        seconds = (Math.floor((timeElapsed)/1000)) % 60;
        minutes = Math.floor((timeElapsed / 1000) / 60)
        this.printTime(milliSeconds, seconds, minutes);
        this.animationId = requestAnimationFrame(this.updateTime.bind(this));
        console.log(this.animationId);
    }

    printTime(milliSeconds, seconds, minutes) {
        milliSeconds = milliSeconds.toString().padStart(3, '0');
        seconds = seconds.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');

        const time = [minutes.toString().padStart(2, '0'), seconds, milliSeconds].join(":");
        this.timer.textContent = time;
    }
}

export default Stopwatch;