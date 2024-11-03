function OrderResult({ summary, discount, delivery, total }) {
  return (
    <>
      <p>
        Подытог: <span class="summary">{summary}</span>₽
      </p>
      <p>
        Скидка: -<span class="discount">{discount}</span>₽
      </p>
      <p>
        Доставка: <span class="delivery">{delivery}</span>₽
      </p>
      <p>
        Итого: <span class="result">{summary - discount + delivery}</span>₽
      </p>
      <button>Заказать</button>
    </>
  );
}

export default OrderResult;
