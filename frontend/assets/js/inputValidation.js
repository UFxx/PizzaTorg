const inputs = document.querySelectorAll(
  '.add-to-cart__container input, .item-count input'
);

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const value = parseInt(input.value);

    if (value < 1) {
      input.value = 1;
    } else if (value > 99) {
      input.value = 99;
    }
  });
});
