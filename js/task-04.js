const refs = {
    counter: document.querySelector('#value'),
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    incrementButton: document.querySelector('button[data-action="increment"]'),
}

let counterValue = 0;

refs.decrementButton.addEventListener('click', onButtonDownClick);
refs.incrementButton.addEventListener('click', onButtonUpClick);

function onButtonDownClick(){
    counterValue -= 1;
    refs.counter.textContent = counterValue;

}

function onButtonUpClick() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
}

