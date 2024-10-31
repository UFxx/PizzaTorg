const input = document.querySelector('.add-to-cart__container input');

input.addEventListener('input', () => {
  const value = parseInt(input.value);

  if (value < 1) {
    input.value = 1;
  }
});
