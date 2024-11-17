import axios from 'axios';

import OrderItem from './OrderItem';
import OrderResult from './OrderResult';

function OrderForm({ host, port, order, userData }) {
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
    const username = form.children[0];
    const phone = form.children[1];
    const address = form.children[3];
    const text = form.children[4];
    const orderPoints = order.map((orderItem) => {
      return { product: orderItem.id, amount: orderItem.amount };
    });

    const data = {
      username: username.value,
      phone: phone.value,
      address: address.value,
      order_points: orderPoints,
      text: text.value
    };

    if ((username.value !== '') & (phone.value !== '')) {
      axios.post(`http://${host}:${port}/api-new_order/`, data).then((data) => {
        console.log(data.status);
        if (data.status === 201) {
          window.location.href = '/order-successful';
        }
      });
      button.setAttribute('disabled', '');
      localStorage.setItem('order', JSON.stringify([]));
    } else {
      [username, phone].forEach((input) => {
        if (input.value === '') {
          input.style.border = '2px solid red';
        } else {
          input.style.border = '2px solid #d9d9d9';
        }
      });
    }
  }

  return (
    <>
      <div className="container">
        <p className="title">Заказ</p>
        <div className="order-content">
          <form action="" className="order__form">
            <input
              type="text"
              name=""
              placeholder="Имя"
              defaultValue={userData?.first_name}
            />
            <input
              type="tel"
              name=""
              placeholder="Телефон"
              defaultValue={userData?.phone}
            />
            <p>Улица, дом, квартира</p>
            <input
              type="text"
              name=""
              placeholder="Адрес"
              defaultValue={userData?.address}
            />
            <textarea placeholder="Комментарий к заказу"></textarea>
          </form>
        </div>
        <div className="order-detail">
          <p className="title">Детали заказа</p>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Количество</th>
                <th>Итого</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
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
