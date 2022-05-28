const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', (event) => {
    const countOfValues = Number(validationInputRef.dataset["length"]);
    if (validationInputRef.value.length === countOfValues) {
        validationInputRef.classList.add("valid");
        validationInputRef.classList.remove("invalid");
    }
    else {
        validationInputRef.classList.remove("valid");
        validationInputRef.classList.add("invalid");
    }
});

