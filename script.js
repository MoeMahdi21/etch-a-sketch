const container = document.querySelector('#grid-container');
const btn = document.querySelector('#grid-btn');
btn.addEventListener('click', () => {
  let userInput = prompt('Please Enter grid size');
  if (userInput <= 100) {
    createGrid(userInput);
  } else {
    alert('Grid Size max limit is 100');
  }
});

let rgbBackground = function () {
  return Math.floor(Math.random() * 256);
};

function createGrid(size = 0) {
  container.textContent = '';
  let pixelsWide = 960 / size;
  for (let i = 1; i <= size * size; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = pixelsWide + 'px';
    newDiv.style.height = pixelsWide + 'px';

    newDiv.addEventListener('mouseenter', () => {
      newDiv.style.background = `rgb(${rgbBackground()}, ${rgbBackground()}, ${rgbBackground()})`;
    });
    container.appendChild(newDiv);
  }
}
