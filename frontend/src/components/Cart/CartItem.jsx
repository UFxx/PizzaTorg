import { useState } from 'react';
import timesIcon from '../../assets/images/times.png';

function CartItem({ id, name, price, img, amount }) {
  const [productPrice, setProductPrice] = useState(price);

  function deleteItem(button) {
    button.closest('.cart-item').remove();

    const order = JSON.parse(localStorage.getItem('order'));
    const newOrder = order.filter((item) => item.id !== id);

    localStorage.setItem('order', JSON.stringify(newOrder));
  }

  function calculateProductPrice(input) {
    const value = input.value;

    if (value < 1) {
      input.value = 1;
    } else if (value > 99) {
      input.value = 99;
    }

    input.parentElement.nextElementSibling.textContent =
      value * productPrice + '₽';
  }

  return (
    <>
      <div className="cart-item">
        <div className="item-img">
          <img src={img} alt="" />
        </div>
        <div className="cart-item-info">
          <div className="item-title">
            <p>{name}</p>
            <span>
              <img
                className="delete-product-button"
                src={timesIcon}
                alt="delete product button"
                onClick={(e) => deleteItem(e.target)}
              />
            </span>
          </div>
          <div className="item-count">
            <input
              type="number"
              defaultValue={amount}
              min={1}
              max={99}
              onInput={(e) => calculateProductPrice(e.target)}
            />
            <p>шт.</p>
          </div>
          <p className="item-price">
            {price}
            <span>₽</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
