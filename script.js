function quadroDePixels(){
  let quadroPixels = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i += 1) {
    let linha = document.createElement('div');
    for (let j = 0; j < 5; j += 1) {
      let pixel = document.createElement('div');
      pixel.style.width = '40px';
      pixel.style.height = '40px';
      pixel.style.border = '1px solid black';
      pixel.style.display = 'inline-block';
      pixel.className = 'pixel';
      linha.appendChild(pixel);  
    }
    quadroPixels.appendChild(linha);
  }
}
quadroDePixels();