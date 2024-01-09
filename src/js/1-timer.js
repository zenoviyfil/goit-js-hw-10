import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]')
// startBtn.addEventListener('click', )

let userSelectedDate;

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


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if(options.defaultDate >= userSelectedDate) {
        return alert('Please choose a date in the future');
    } else {
        convertMs(selectedDates[0]);
    }
    console.log(selectedDates[0]);
  },
};


flatpickr('#datetime-picker', options);