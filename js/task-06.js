const input = document.querySelector('input');

input.addEventListener('blur', onLostFocusInput);

function onLostFocusInput(evt) {
    if (Number(input.dataset.length) == input.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
