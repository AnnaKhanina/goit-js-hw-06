const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = Number.parseInt(refs.value.textContent) || 0;

function updateValue(newValue) {
    refs.value.textContent = newValue;
}

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue(counterValue);
})

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue(counterValue);
})