const inputEl = document.querySelector('#validation-input');
const textLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
    const value = inputEl.value.trim();
    const length = value.length;

    if (length === textLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    }
});

