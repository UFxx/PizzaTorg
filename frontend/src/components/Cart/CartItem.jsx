import { useState } from 'react';
import timesIcon from '../../assets/images/times.png';

function CartItem({ id, name, price, img, amount, order, setOrder }) {
  const [productPrice, setProductPrice] = useState(price);

  function deleteItem(button) {
    button.closest('.cart-item').remove();

    const newOrder = order.filter((item) => item.id !== id);

    localStorage.setItem('order', JSON.stringify(newOrder));
  }

  function calculateProductPrice(input) {
    const value = input.value;

    const orderCopy = Object.assign(order);
    const newOrder = orderCopy?.map((item) => {
      if (id === item.id) {
        item.amount = parseInt(value);
      }
      return orderCopy;
    });

    if (Boolean(input.value)) {
      setOrder(newOrder[0]);
      localStorage.setItem('order', JSON.stringify(order));
    }

    input.parentElement.nextElementSibling.textContent = `${productPrice}₽ x ${value
      .replace('-', '')
      .replace('+', '')} = ${
      value.replace('-', '').replace('+', '') * productPrice
    }₽`;
  }

  function validateInput(input) {
    if (Number(input.value) < 1) {
      input.value = 1;
      calculateProductPrice(input);
    } else if (Number(input.value) > 99) {
      input.value = 99;
      calculateProductPrice(input);
    }
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
              onBlur={(e) => validateInput(e.target)}
              onInput={(e) => calculateProductPrice(e.target)}
            />
            <p>шт.</p>
          </div>
          <p className="item-price">
            {price}₽ x {amount} = {price * amount}₽
          </p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
