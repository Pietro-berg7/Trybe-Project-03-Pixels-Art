let paleta = document.getElementById('color-palette');
let firstColor = 'rgb(0,0,0)';
let pixelBoard = document.getElementById('pixel-board')

function initialColor() {
  let corInicial = document.getElementById('color1');
  corInicial.classList.add('selected');
}
initialColor();

function selectColor(cor) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  cor.target.classList.add('selected');
}
paleta.addEventListener('click', selectColor);

function setColor() {
  let color = document.querySelector('.selected');
  let localColor = window.getComputedStyle(color);
  let newColor = localColor.getPropertyValue('background-color');
  return firstColor = newColor;
}
paleta.addEventListener('click', setColor);

function paint(color) {
  color.target.style.backgroundColor = firstColor;
}
pixelBoard.addEventListener('click', paint);

let button = document.querySelector('#clear-board');
button.addEventListener('click', function () {
  let pixelClear = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClear.length; i += 1) {
    pixelClear[i].style.backgroundColor = 'white';
  } 
}); 