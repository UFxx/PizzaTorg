import { useEffect, useState } from 'react';
import ProductRating from '../ProductRating/ProductRating';

function ProductContent({
  id,
  productName,
  isAvailable,
  productPhoto,
  price,
  size,
  composition,
  weight,
  ratingScore,
  order,
  setOrder
}) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    order.forEach((orderItem) => {
      if (Number(orderItem.id) === Number(id)) {
        setInCart(true);
      }
    });
  }, [order, inCart]);

  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<ProductRating key={i} />);
  }

  function addObject(button) {
    const inputValue = parseInt(button.previousElementSibling.value);

    const newObject = {
      id: id,
      name: productName,
      price: price,
      photo: productPhoto,
      amount: inputValue
    };

    setOrder((order) => [...order, newObject]);
    localStorage.setItem('order', JSON.stringify(order));
  }

  function validateInput(input) {
    if (input.value < 1) {
      input.value = 1;
    } else if (input.value > 99) {
      input.value = 99;
    }
  }

  return (
    <>
      <div className="product-title">{productName}</div>
      <div className="product-content">
        <div className="product-img">
          <img src={productPhoto} alt="" />
        </div>
        <div className="product-info">
          <p className="available">{isAvailable}</p>
          <p className="price">{price}₽ за 1 шт.</p>
          <div className="add-to-cart__container">
            <input
              type="number"
              defaultValue="1"
              min={1}
              max={99}
              onBlur={(e) => validateInput(e.target)}
            />{' '}
            шт.
            <button onClick={(e) => addObject(e.target)} disabled={inCart}>
              {inCart ? 'Уже в корзине' : 'Добавить в корзину'}
            </button>
          </div>
          <div className="characteristics">
            <p>
              Размер: <span>{size}</span>см.
            </p>
            <p>
              Состав: <span>{composition}</span>
            </p>
            <p>
              Вес: <span>{weight}</span> гр.
            </p>
          </div>
          <div className="rating-stars">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default ProductContent;
