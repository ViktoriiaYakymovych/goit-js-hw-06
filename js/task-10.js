function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    }

    boxesDiv.append(...boxes);
}

function destroyBoxes() {
    boxesDiv.innerHTML = '';
}

createBtn.addEventListener('click', () => {
    createBoxes(Number(input.value));
    input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);