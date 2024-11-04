import { Link } from 'react-router-dom';
import ProductRating from '../Main/ProductRating';

import productPhoto from '../../assets/images/index/special-offer-product.png';

function ProductCard({
  productName,
  productPrice,
  productRating,
  order,
  setOrder
}) {
  const rating = [];
  for (let i = 0; i < productRating; i++) {
    rating.push(<ProductRating />);
  }

  function addObject() {
    const newObject = {
      name: productName,
      price: productPrice,
      photo: productPhoto,
      amount: 1
    };
    setOrder((order) => [...order, newObject]);
    localStorage.setItem('order', JSON.stringify(order));
  }

  return (
    <div className="product-card">
      <Link to="/product">
        <img src={productPhoto} alt="" />
      </Link>
      <div className="card-content">
        <div className="card-title">
          <Link to="/product">{productName}</Link>
        </div>
        <div className="card-price">
          <p>{productPrice}₽</p>
          <button onClick={addObject}>В корзину</button>
        </div>
        <div className="card-rating">{rating}</div>
      </div>
    </div>
  );
}

export default ProductCard;
