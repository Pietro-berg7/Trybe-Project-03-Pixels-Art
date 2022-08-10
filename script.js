function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}
randomColor();

function random2() {
  const randomColor2 = document.getElementById('color2');
  randomColor2.style.backgroundColor = randomColor();
}
random2();

function random3() {
  const randomColor3 = document.getElementById('color3');
  randomColor3.style.backgroundColor = randomColor();
}
random3();

function random4() {
  const randomColor4 = document.getElementById('color4');
  randomColor4.style.backgroundColor = randomColor();
}
random4();

let getNumber;
let pixelBoardSize = 5;
const input = document.getElementById('board-size');
const buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', () => {
  const clear = document.getElementById('pixel-board');
  clear.innerHTML = '';
  getNumber = input.value;
  pixelBoardSize = getNumber;
  createPixelBoard(pixelBoardSize);
});

function createPixelBoard(size) {
  const pixelBoardSelect = document.getElementById('pixel-board');
  if (size === '') {
    alert('Board inválido!');
  } else if (size < 5) {
    pixelBoardSize = 5;
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        const column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    const sizeBoard = document.getElementById('pixel-board');
    const boardSize = pixelBoardSize * 42;
    const pxBoardSize = `${boardSize}px`;
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  } else if (size > 50) {
    pixelBoardSize = 50;
    for (let i = 0; i < 50; i += 1) {
      for (let j = 0; j < 50; j += 1) {
        const column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    const sizeBoard = document.getElementById('pixel-board');
    const boardSize = pixelBoardSize * 42;
    const pxBoardSize = `${boardSize}px`;
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  } else {
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    const sizeBoard = document.getElementById('pixel-board');
    const boardSize = pixelBoardSize * 42;
    const pxBoardSize = `${boardSize}px`;
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  }
}
createPixelBoard(pixelBoardSize);

const paleta = document.getElementById('color-palette');
let firstColor = 'rgb(0,0,0)';
const pixelBoard = document.getElementById('pixel-board');

function initialColor() {
  const corInicial = document.getElementById('color1');
  corInicial.classList.add('selected');
}
initialColor();

function selectColor(cor) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  cor.target.classList.add('selected');
}
paleta.addEventListener('click', selectColor);

function setColor() {
  const color = document.querySelector('.selected');
  const localColor = window.getComputedStyle(color);
  const newColor = localColor.getPropertyValue('background-color');
  return (firstColor = newColor);
}
paleta.addEventListener('click', setColor);

function paint(color) {
  color.target.style.backgroundColor = firstColor;
}
pixelBoard.addEventListener('click', paint);

const button = document.querySelector('#clear-board');
button.addEventListener('click', () => {
  const pixelClear = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClear.length; i += 1) {
    pixelClear[i].style.backgroundColor = 'white';
  }
});
