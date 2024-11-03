import { Link } from 'react-router-dom';
import ProductRating from '../Main/ProductRating';

import productPhoto from '../../assets/images/index/special-offer-product.png';

function ProductCard({ productName, productPrice, productRating }) {
  const rating = [];
  for (let i = 0; i < productRating; i++) {
    rating.push(<ProductRating />);
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
          <button>В корзину</button>
        </div>
        <div className="card-rating">{rating}</div>
      </div>
    </div>
  );
}

export default ProductCard;
