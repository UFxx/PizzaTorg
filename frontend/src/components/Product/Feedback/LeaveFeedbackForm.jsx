import axios from 'axios';

function LeaveFeedbackForm({protocol, host, port, userData, productId }) {
  function createNewComment(button) {
    const form = button.parentElement;
    const username = form.children[1].value;
    const theme = form.children[0].value;
    const rating = form.children[2].children[0].value;
    const text = form.children[3].value;

    const config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('JWT') }
    };

    axios
      .post(
        `${protocol}://${host}:${port}/api-new_comment/`,
        {
          username: username,
          email: userData?.email,
          title: theme,
          rating: rating,
          product: productId,
          text: text
        },
        config
      )
      .then(() => {
        [username, theme, text].forEach((value) => {
          value = 0;
        });
      });
  }

  function validateRatingInput(input) {
    const value = input.value;

    if (value > 5) {
      input.value = 5;
    } else if (value < 1) {
      input.value = 1;
    }
  }

  return (
    <>
      <form className="leave-a-feedback__form">
        <input type="text" placeholder="Тема" />
        <input
          type="text"
          placeholder="Имя"
          defaultValue={userData?.first_name}
        />
        <p>
          Оценка:
          <input
            type="number"
            id="feedback-rating-input"
            onBlur={(e) => validateRatingInput(e.target)}
            defaultValue="5"
            min={1}
            max={5}
          />
          <span>/5</span>
        </p>
        <textarea id="" placeholder="Отзыв"></textarea>
        <button
          onClick={(e) => createNewComment(e.target)}
          type="button"
          className="send-feedback"
        >
          Отправить
        </button>
      </form>
    </>
  );
}

export default LeaveFeedbackForm;
