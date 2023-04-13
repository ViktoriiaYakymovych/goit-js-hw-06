const counterValue = document.getElementById('value');
const decrementEl = document.querySelector('[data-action = "decrement"]');
const incrementEl = document.querySelector('[data-action = "increment"]');

let number = 0;

decrementEl.addEventListener('click', () => {
    number -= 1;
    counterValue.textContent = number;
    });

    incrementEl.addEventListener('click', () => {
    number += 1;
    counterValue.textContent = number;
    });

    console.log(counterValue);