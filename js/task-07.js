const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
inputEl.addEventListener('input', makeChange);
function makeChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`
};