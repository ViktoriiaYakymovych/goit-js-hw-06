const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailEl = formEl.elements.email.value;
    const passwordEl = formEl.elements.password.value;

    if (emailEl === '' || passwordEl === '') {
    alert('Необхідно заповнити усі поля!');
    } else {
    const userData = {
        email: emailEl,
        password: passwordEl,
    };

    console.log(userData);

    formEl.reset();
    }
});
