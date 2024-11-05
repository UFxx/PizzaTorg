import axios from 'axios';

function LeaveFeedbackForm({ productId }) {
  function createNewComment(button) {
    const form = button.parentElement;
    const username = form.children[1].value;
    const theme = form.children[0].value;
    const rating = form.children[2].children[0].value;
    const text = form.children[3].value;

    axios
      .post('http://127.0.0.1:8000/api-new_comment/', {
        username: username,
        email: '',
        title: theme,
        rating: rating,
        product: productId,
        text: text
      })
      .then(() => {
        [username, theme, text].forEach((value) => {
          value = 0;
        });
      });
  }

  return (
    <>
      <form className="leave-a-feedback__form">
        <input type="text" placeholder="Тема" />
        <input type="text" placeholder="Имя" />
        <p>
          Оценка:
          <input
            type="number"
            id="feedback-rating-input"
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
