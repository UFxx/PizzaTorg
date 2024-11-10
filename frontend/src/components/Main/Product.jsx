import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product({ id, img, name, price, order, setOrder }) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    order.forEach((orderItem) => {
      if (Number(orderItem.id) === Number(id)) {
        setInCart(true);
      }
    });
  }, [order, inCart]);

  function addObject() {
    const newObject = {
      id: id,
      name: name,
      price: price,
      photo: img,
      amount: 1
    };

    setOrder((order) => [...order, newObject]);
    localStorage.setItem('order', JSON.stringify(order));
  }

  return (
    <>
      <div className="product">
        <Link to={`/product?id=${id}`}>
          <img src={img} alt="" />
        </Link>
        <div className="product-name">
          <Link to={`/product?id=${id}`}>{name}</Link>
        </div>
        <div className="product-price">
          <p>{price}₽</p>
          <button onClick={addObject} disabled={inCart}>
            {inCart ? 'В корзине' : 'В корзину'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
