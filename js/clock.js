setInterval(setClock, 1000);

const handHour = document.getElementById('hand_hour');
const handMin = document.getElementById('hand_min');
const handSec = document.getElementById('hand_sec');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(handSec, secondsRatio);
    setRotation(handMin, minutesRatio);
    setRotation(handHour, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360).toString());
}

setClock();
