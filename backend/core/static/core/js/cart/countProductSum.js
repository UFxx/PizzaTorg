const sumInputs = document.querySelectorAll('.item-count input');

sumInputs.forEach((input) => {
  const price =
    input.parentElement.nextElementSibling.textContent.split('₽')[0];
  input.addEventListener('input', () => {
    const value = input.value;
    input.parentElement.nextElementSibling.textContent =
      value * parseInt(price) + '₽';
    calculateTotalSum();
  });
});
