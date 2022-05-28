const formRegisterRef = document.querySelector('.login-form');

formRegisterRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmptyField = [...event.currentTarget.elements].filter(({ type }) =>
        type != 'submit').some(({ value }) => {
        return value === '';
    });

    if (isEmptyField) {
        alert("Please fill in all fields!");
    }
    else {
        const { elements:
            { email, password }
        } = event.currentTarget;
        
        console.log(`Email: ${email.value}\nPassword: ${password.value}`);
        event.currentTarget.reset();
    }
});
