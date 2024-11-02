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

const feedbackRatingInput = document.querySelector('#feedback-rating-input');

feedbackRatingInput.addEventListener('input', () => {
  const value = feedbackRatingInput.value;

  if (value < 1) {
    feedbackRatingInput.value = 1;
  } else if (value > 5) {
    feedbackRatingInput.value = 5;
  }
});
