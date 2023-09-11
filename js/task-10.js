const refs = {
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  inputNumberValue: document.querySelector('input'),
  boxesDiv: document.getElementById('boxes'),
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(event) {
  const amount = refs.inputNumberValue.value;
  const markUp = [];
  let side = 30;
  for (let i = 1; i <= amount; i += 1){
    side += 10;
    markUp.push(`<div style="width: ${side}px; height: ${side}px; background-color: ${getRandomHexColor()};"></div>`);

  
  }
  console.log(markUp);

  refs.boxesDiv.insertAdjacentHTML('beforeend', markUp.join(''));
}

function destroyBoxes(event) {
  refs.boxesDiv.innerHTML = '';
};