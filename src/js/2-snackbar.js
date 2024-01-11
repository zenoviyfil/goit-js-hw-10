import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form')

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
    const stateValue = form.elements.state.value;
    const delay = form.elements.delay.value;

    createPromise(delay, stateValue)
      .then(delay =>
        iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms` })
      )
      .catch(delay =>
        iziToast.error({ message: `❌ Rejected promise in ${delay}ms` })
      );
}

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    })
};



// console.log(form);
// console.log(delay);
// console.log(fullfieldStatus);
// console.log(rejectedStatus);