const deleteButtons = document.querySelectorAll('.delete-product-button');

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.cart-item');
    item.childNodes[3].childNodes[5].textContent = 0;
    item.remove();
    calculateTotalSum();
  });
});
