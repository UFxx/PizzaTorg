import { useState, useEffect } from 'react';

import productImg from '../../assets/images/product-img.png';

import CartItem from './CartItem';

function Cart() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const elements = Array.from(document.getElementsByClassName('item-price'));
    const total = elements.reduce(
      (acc, element) => acc + Number(element.innerText.split('₽')[0]),
      0
    );
    setTotal(total);

    const observer = new MutationObserver((mutations) => {
      const elements = Array.from(
        document.getElementsByClassName('item-price')
      );
      const total = elements.reduce(
        (acc, element) => acc + Number(element.innerText.split('₽')[0]),
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
          <CartItem
            name="Пирог с картофелем и осетинским сыром. Картофджын."
            price="1020"
            img={productImg}
          />
          <CartItem
            name="Пирог с картофелем и осетинским сыром. Картофджын."
            price="1020"
            img={productImg}
          />
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
