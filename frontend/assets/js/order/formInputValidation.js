const formInputs = document.querySelectorAll('.order-content input');
const button = document.querySelector('.order-result button');

button.addEventListener('click', () => {
  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('input__invalid');
    } else {
      input.classList.remove('input__invalid');
    }
  });

  const p = document.createElement('p');
  p.textContent = 'Обязательные поля';
  p.style.color = 'red';
  const orderContent = document.querySelector('.order-content');
  if (
    (orderContent.lastChild.textContent === 'Обязательные поля') &
    isAllInputsValid()
  ) {
    orderContent.lastChild.remove();
    return;
  } else if (orderContent.lastChild.textContent !== 'Обязательные поля') {
    orderContent.appendChild(p);
  }
});

function isAllInputsValid() {
  let allVallid = true;

  formInputs.forEach((input) => {
    if (input.classList.contains('input__invalid')) {
      allVallid = false;
    }
  });
  return allVallid;
}
