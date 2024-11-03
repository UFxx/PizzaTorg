function LeaveFeedbackForm() {
  return (
    <>
      <form class="leave-a-feedback__form">
        <input type="text" placeholder="Имя" />
        <p>
          Оценка:{' '}
          <input type="number" id="feedback-rating-input" defaultValue="5" />
          <span>/5</span>
        </p>
        <textarea id="" placeholder="Отзыв"></textarea>
        <button class="send-feedback">Отправить</button>
      </form>
      ;
    </>
  );
}

export default LeaveFeedbackForm;
