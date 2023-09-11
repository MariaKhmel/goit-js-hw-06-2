const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    // const {elements: { email, password }} = event.currentTarget;
    if (email === '' || password === '') {
        return alert("Please fill in all the fields!");
    }

    console.log({
        email: refs.form.elements.email.value,
        password: refs.form.elements.password.value,
    }); 

    event.currentTarget.reset();
}

