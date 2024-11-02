const totalSum = document.querySelector('#sum');
const productSums = document.querySelectorAll('.item-price');

let res = 0;

function calculateTotalSum() {
  productSums.forEach((sum) => {
    const sumNumber = sum.textContent.split('₽')[0];
    res += parseInt(sumNumber);
  });
  totalSum.textContent = res;
  res = 0;
}

window.addEventListener('DOMContentLoaded', () => calculateTotalSum());
