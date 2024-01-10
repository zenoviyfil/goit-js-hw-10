import flatpickr from "flatpickr";
import iziToast from "izitoast";
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]')
const day = document.querySelector('[data-days]')
const hour = document.querySelector('[data-hours]')
const minute = document.querySelector('[data-minutes]')
const second = document.querySelector('[data-seconds]')

let userSelectedDate;
startBtn.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate >= selectedDates[0]) {
        iziToast.error({
            message: 'Please choose a date in the future',
        });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    const countdown = setInterval(() => {
    const timeLaps = userSelectedDate - Date.now();
    const result = convertMs(timeLaps);
    const {days, hours, minutes, seconds} = result;
    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds);
    if (timeLaps < 1000) {
    clearInterval(countdown);
    }
}, 1000);
});

flatpickr('#datetime-picker', options);