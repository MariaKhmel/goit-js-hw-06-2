
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



fontSizeControl.addEventListener('input', barDragging);

function barDragging(event) {
    text.style.fontSize = event.currentTarget.value + 'px';
}

