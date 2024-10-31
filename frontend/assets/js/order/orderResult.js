const summary = document.querySelector('.summary');
const discount = document.querySelector('.discount');
const delivery = document.querySelector('.delivery');
const result = document.querySelector('.result');
const sums = document.querySelectorAll('tr td:nth-child(3)');

function calculateSummary() {
  let res = 0;
  sums.forEach((sum) => {
    res += parseInt(sum.textContent.split('₽')[0]);
  });
  summary.textContent = res;
  return res;
}

function calculateResult() {
  const summaryNumber = calculateSummary();
  const discountNumber = parseInt(discount.textContent.split('-')[0]);
  const deliveryNumber = parseInt(delivery.textContent.split(':')[0]);
  result.textContent = summaryNumber - discountNumber + deliveryNumber;
}
