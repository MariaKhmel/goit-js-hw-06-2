const refs = {
  body: document.querySelector('body'),
  changeColorButton: document.querySelector('.change-color'),
  bgColorValueSpan :document.querySelector('.color'),
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


refs.changeColorButton.addEventListener('click', changeColorButtonClick);

function changeColorButtonClick(event) {
  
  getRandomHexColor();
  // console.log(typeof getRandomHexColor());
  return refs.body.style.backgroundColor = getRandomHexColor(),
  refs.bgColorValueSpan.textContent = getRandomHexColor();
}