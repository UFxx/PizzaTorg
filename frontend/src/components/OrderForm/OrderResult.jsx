function OrderResult({ summary, discount, delivery, newOrder }) {
  return (
    <>
      <p>
        Подытог: <span className="summary">{summary}</span>₽
      </p>
      <p>
        Скидка: -<span className="discount">{discount}</span>₽
      </p>
      <p>
        Доставка: <span className="delivery">{delivery}</span>₽
      </p>
      <p>
        Итого: <span className="result">{summary - discount + delivery}</span>₽
      </p>
      <button onClick={(e) => newOrder(e.target)}>Заказать</button>
    </>
  );
}

export default OrderResult;
