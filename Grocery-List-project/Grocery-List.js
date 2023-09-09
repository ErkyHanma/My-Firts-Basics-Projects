const list = document.querySelector('.input-text-js');
const product = document.querySelector('.producto');
const erase = document.querySelector('.erase-icon-js');

list.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    addToList();
    list.value = '';
  }
});

function addToList() {
  const newItem = document.createElement('h2');
  newItem.classList.add('electric-js');
  newItem.innerText = `- ${list.value}`;
  
  newItem.addEventListener('click', () => {
    newItem.style.textDecoration = 'line-through';
  });
  
  product.appendChild(newItem);
}

erase.addEventListener('click', () => {
  while (product.firstChild) {
    product.removeChild(product.firstChild);
  }
});
