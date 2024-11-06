import { useState, useEffect } from 'react';

import CartItem from './CartItem';

function Cart({ order, setOrder }) {
  const [total, setTotal] = useState(0);
  const cartItems = JSON.parse(localStorage.getItem('order'));

  useEffect(() => {
    const elements = Array.from(document.getElementsByClassName('item-price'));
    const total = elements.reduce(
      (acc, element) => acc + parseInt(element.innerText.split('=')[1]),
      0
    );
    setTotal(total);

    const observer = new MutationObserver((mutations) => {
      const elements = Array.from(
        document.getElementsByClassName('item-price')
      );
      const total = elements.reduce(
        (acc, element) => acc + parseInt(element.innerText.split('=')[1]),
        0
      );
      setTotal(total);
    });

    elements.forEach((element) => {
      observer.observe(element, {
        characterData: true,
        childList: true,
        subtree: true
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="container">
        <p className="title">Корзина</p>
        <div className="cart-content">
          {cartItems.length > 0 ? (
            cartItems?.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.photo}
                  amount={item.amount}
                  order={order}
                  setOrder={setOrder}
                />
              );
            })
          ) : (
            <p>Тут пока ничего нет!</p>
          )}
        </div>
        <div className="total-sum">
          <p>
            Итого: <span id="sum">{total}</span>₽
          </p>
          <a href="/order-form">
            <button>Оформить заказ</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cart;
