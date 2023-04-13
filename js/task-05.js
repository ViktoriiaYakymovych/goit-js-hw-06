const inputEl = document.getElementById('name-input');
const userName = document.getElementById('name-output');

inputEl.addEventListener('input', (event) => userName.textContent = event.currentTarget.value);

// console.log(inputEl);
// console.log(userName);