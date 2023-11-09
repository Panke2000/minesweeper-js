export { startTime }
import { timeOut } from "./eventListeners.js";
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
var secondsPassed = 0;

function startTime() {
    if (secondsPassed >= 3599) {
        timeOut();
    }
    ++secondsPassed;
    secondsLabel.innerHTML = checkTime(secondsPassed % 60);
    minutesLabel.innerHTML = checkTime(parseInt(secondsPassed / 60));
}
  
function checkTime(time) {
    const timeString = time + '';
    if (timeString.length < 2) {
        return '0' + timeString;
    } else {
        return timeString;
    }
}