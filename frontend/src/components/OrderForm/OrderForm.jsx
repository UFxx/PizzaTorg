import axios from 'axios';

import OrderItem from './OrderItem';
import OrderResult from './OrderResult';
import { useEffect, useState } from 'react';

function OrderForm({ order }) {
  function calculateSummary() {
    let summary = 0;
    order?.forEach((el) => {
      summary += el.price * el.amount;
    });

    return summary;
  }

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
      <div className="container">
        <p className="title">Заказ</p>
        <div className="order-content">
          <form action="" className="order__form">
            <input type="text" name="" placeholder="Имя" required />
            <input type="tel" name="" placeholder="Телефон" required />
            <p>Улица, дом, квартира</p>
            <input type="text" name="" placeholder="Адрес" required />
            <textarea placeholder="Комментарий к заказу"></textarea>
          </form>
        </div>
        <div className="order-detail">
          <p className="title">Детали заказа</p>
          <table>
            <tr>
              <th>Название</th>
              <th>Количество</th>
              <th>Итого</th>
            </tr>
            {order?.map((orderItem) => {
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
          <div className="order-result">
            <OrderResult
              summary={calculateSummary()}
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
