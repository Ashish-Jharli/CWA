// Set the initial countdown time (in seconds)
let timeleft = 10;

// Function to update the countdown
function updateCountdown() {
    if (timeleft <= 0) {
        document.getElementById("countdown").innerHTML = "Time's up!";
        clearInterval(downloadTimer);
    } else {
        document.getElementById("countdown").innerHTML = `${timeleft} seconds remaining`;
        timeleft--;
    }
}

// Update the countdown every second
const downloadTimer = setInterval(updateCountdown, 1000);