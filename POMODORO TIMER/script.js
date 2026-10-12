const TimerOne = document.querySelector('.timer-one');
const TimerTwo = document.querySelector('.timer-two');
const TimerDisplay = document.querySelector('.working-part p');
const workingPart = document.querySelector('.working-part');
const selectionPart = document.querySelector('.selection-part');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const end = document.querySelector('.end');

let timeLeft = 0;
let selectedTime = 0;
let timer = null;


function updateDisplay(){
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft % 60;

    TimerDisplay.textContent =`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
TimerOne.addEventListener('click', () =>{

    selectedTime = 25* 60;
    timeLeft = selectedTime;
    updateDisplay();
    workingPart.classList.remove('hidden');
    selectionPart.classList.add('hidden');
})

TimerTwo.addEventListener('click', () =>{
    selectedTime = 45* 60;
    timeLeft = selectedTime;
    updateDisplay();
    workingPart.classList.remove('hidden');
    selectionPart.classList.add('hidden');
})

start.addEventListener('click', () => {
    if (timer !== null || timeLeft <= 0) return;

    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Pomodoro session completed!");
        }
    }, 1000);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;

    timeLeft = selectedTime;
    updateDisplay();
});
end.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;

    timeLeft = 0;
    selectedTime = 0;

    workingPart.classList.add('hidden');
    selectionPart.classList.remove('hidden');
});