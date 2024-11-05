import axios from 'axios';
import { useState } from 'react';

import OrderItem from './OrderItem';
import OrderResult from './OrderResult';

function OrderForm() {
  const [summary, setSummary] = useState(0);

  const order = JSON.parse(localStorage.getItem('order'));

  function newOrder(button) {
    const form =
      button.parentElement.parentElement.previousElementSibling.children[0];
    const username = form.children[0].value;
    const phone = form.children[1].value;
    const address = form.children[3].value;
    const text = form.children[4].value;
    const orderPoints = order.map((orderItem) => {
      return { product: orderItem.id, amount: orderItem.amount };
    });

    const data = {
      username: username,
      phone: phone,
      address: address,
      order_points: orderPoints,
      text: text
    };

    axios.post('http://127.0.0.1:8000/api-new_order/', data);
  }

  return (
    <>
      <div class="container">
        <p class="title">Заказ</p>
        <div class="order-content">
          <form action="" class="order__form">
            <input type="text" name="" placeholder="Имя" required />
            <input type="tel" name="" placeholder="Телефон" required />
            <p>Улица, дом, квартира</p>
            <input type="text" name="" placeholder="Адрес" required />
            <textarea placeholder="Комментарий к заказу"></textarea>
          </form>
        </div>
        <div class="order-detail">
          <p class="title">Детали заказа</p>
          <table>
            <tr>
              <th>Название</th>
              <th>Количество</th>
              <th>Итого</th>
            </tr>
            {order.map((orderItem) => {
              return (
                <OrderItem
                  key={orderItem.id}
                  id={orderItem.id}
                  name={orderItem.name}
                  price={orderItem.price}
                  amount={orderItem.amount}
                />
              );
            })}
          </table>
          <hr />
          <div class="order-result">
            <OrderResult
              summary={summary}
              discount={0}
              delivery={0}
              newOrder={newOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
