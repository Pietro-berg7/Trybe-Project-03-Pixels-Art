function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255 );
  let color = `rgb(${red},${green},${blue})`;
  return color;
}
randomColor();

function random2() {
  let randomColor2 = document.getElementById('color2');
  randomColor2.style.backgroundColor = randomColor();
}
random2();

function random3() {
  let randomColor3 = document.getElementById('color3');
  randomColor3.style.backgroundColor = randomColor();
}
random3();

function random4() {
  let randomColor4 = document.getElementById('color4');
  randomColor4.style.backgroundColor = randomColor();
}
random4();

let getNumber;
let pixelBoardSize = 5;
let input = document.getElementById('board-size');
let buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', function(){
  let clear = document.getElementById('pixel-board');
  clear.innerHTML = '';      
  getNumber = input.value;
  pixelBoardSize = getNumber; 
  createPixelBoard(pixelBoardSize);
});



function createPixelBoard(size) {
  let pixelBoardSelect = document.getElementById('pixel-board');
  if (size === '')  {
    alert('Board inválido!');
  } else if (size < 5) {
    pixelBoardSize = 5;
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        let column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    let sizeBoard = document.getElementById('pixel-board');
    let boardSize = pixelBoardSize * 42;
    let pxBoardSize = `${boardSize}px`
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  } else if (size > 50) {
    pixelBoardSize = 50;
    for (let i = 0; i < 50; i += 1) {
      for (let j = 0; j < 50; j += 1) {
        let column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    let sizeBoard = document.getElementById('pixel-board');
    let boardSize = pixelBoardSize * 42;
    let pxBoardSize = `${boardSize}px`
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  } else {
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        let column = document.createElement('li');
        column.className = 'pixel';
        pixelBoardSelect.appendChild(column);
      }
    }
    let sizeBoard = document.getElementById('pixel-board');
    let boardSize = pixelBoardSize * 42;
    let pxBoardSize = `${boardSize}px`
    sizeBoard.style.width = pxBoardSize;
    sizeBoard.style.height = pxBoardSize;
  } 
}
createPixelBoard(pixelBoardSize); 




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