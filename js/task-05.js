const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
    
}

refs.input.addEventListener('input', onInputText);


function onInputText(evt) {
   
    refs.nameOutput.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
    }
}
