let quadroPixels = document.querySelector('#pixel-board');
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    let pixel = document.createElement('div');
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.className = 'pixel';
    quadroPixels.appendChild(pixel);  
  }
  let space = document.createElement('br');
  quadroPixels.appendChild(space);
}