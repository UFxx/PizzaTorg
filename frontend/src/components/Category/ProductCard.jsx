import { Link } from 'react-router-dom';
import ProductRating from '../ProductRating/ProductRating';
import { useState, useEffect } from 'react';

function ProductCard({
  id,
  productName,
  productPrice,
  productRating,
  productImage,
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
  for (let i = 0; i < productRating; i++) {
    rating.push(<ProductRating key={i} />);
  }

  function addObject() {
    const newObject = {
      id: id,
      name: productName,
      price: productPrice,
      photo: productImage,
      amount: 1
    };

    setOrder((order) => [...order, newObject]);
    localStorage.setItem('order', JSON.stringify(order));
  }

  return (
    <div className="product-card">
      <Link to={`/product?id=${id}`}>
        <img src={productImage} alt="" />
      </Link>
      <div className="card-content">
        <div className="card-title">
          <Link to={`/product?id=${id}`}>{productName}</Link>
        </div>
        <div className="card-price">
          <p>{productPrice}₽</p>
          <button onClick={addObject} disabled={inCart}>
            {inCart ? 'В корзине' : 'В корзину'}
          </button>
        </div>
        <div className="card-rating">{rating}</div>
      </div>
    </div>
  );
}

export default ProductCard;
