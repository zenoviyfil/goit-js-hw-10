import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

// const startBtn = document.querySelector('[data-start]')
// startBtn.addEventListener('click', )

let userSelectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates;
    if(this.defaultDate < userSelectedDate) {
        return alert('Please choose a date in the future');
    } else {
        
    }
    console.log(selectedDates[0]);
  },
};


flatpickr('#datetime-picker', {options});