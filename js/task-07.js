const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.fontSizeInput.addEventListener('input', (event) =>
    refs.text.style.fontSize = `${event.currentTarget.value}px`);