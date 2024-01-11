import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form')

form.addEventListener('submit', createPromise);

function createPromise() {
            const fullfieldStatus = form.elements.state.value;
            const delay = form.elements.delay.value;

            console.log(fullfieldStatus)
            console.log(delay)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fullfieldStatus === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    })
      .then(delay =>
        iziToast.info({ message: `✅ Fulfilled promise in ${delay}ms` })
      )
      .catch(delay =>
        iziToast.info({ message: `❌ Rejected promise in ${delay}ms` })
      );
};

// console.log(form);
// console.log(delay);
// console.log(fullfieldStatus);
// console.log(rejectedStatus);