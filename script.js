const container = document.querySelector('#grid-container');

for (let i = 1; i <= 256; i++) {
  const newDiv = document.createElement('div');
  newDiv.addEventListener('mouseenter', () => {
    newDiv.style.background = 'black';
  });
  container.appendChild(newDiv);
}
