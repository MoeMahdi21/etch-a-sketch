const container = document.querySelector('#grid-container');

for (let i = 1; i <= 256; i++) {
  const newDiv = document.createElement('div');
  container.appendChild(newDiv);
}
