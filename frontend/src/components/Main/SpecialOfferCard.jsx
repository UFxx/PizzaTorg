import ProductRating from './ProductRating.jsx';

import productPhoto from '../../assets/images/index/special-offer-product.png';

function SpecialOfferCard({ productName, productPrice, productRating }) {
  const rating = [];
  for (let i = 0; i < productRating; i++) {
    rating.push(<ProductRating />);
  }

  return (
    <>
      <div className="special-offer__card">
        <a href="/product">
          <img src={productPhoto} alt="" />
        </a>
        <div className="card-content">
          <div className="card-title">
            <a href="/product">{productName}</a>
          </div>
          <div className="card-price">
            <p>{productPrice}₽</p>
            <button>В корзину</button>
          </div>
          <div className="card-rating">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default SpecialOfferCard;
