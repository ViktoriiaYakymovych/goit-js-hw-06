const inputEl = document.getElementById('name-input');
const userName = document.getElementById('name-output');

inputEl.addEventListener('input', (event) => { userName.textContent = inputEl.value.trim() || 'Anonymous' });

// console.log(inputEl);
// console.log(userName);