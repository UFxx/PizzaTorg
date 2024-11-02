const itemsPrice = document.querySelectorAll('tr td:nth-child(2)');

function calculateItemsSum() {
  itemsPrice.forEach((price) => {
    const pricePerOne = parseInt(price.textContent.split('₽')[0]);
    const amount = parseInt(price.textContent.split('x')[1]);
    price.nextElementSibling.textContent = pricePerOne * amount + '₽';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  calculateItemsSum();
  calculateSummary();
  calculateResult();
});
