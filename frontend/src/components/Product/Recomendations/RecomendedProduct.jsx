import RecomendedProductRating from './RecomendedProductRating';

import productPhoto from '../../../assets/images/product-img.png';

function RecomendedProduct({ name, price, ratingScore }) {
  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<RecomendedProductRating />);
  }
  return (
    <>
      <div class="product-card">
        <a href="product.html">
          <img src={productPhoto} alt="" />
        </a>
        <div class="card-content">
          <div class="card-title">
            <a href="product.html">{name}</a>
          </div>
          <div class="card-price">
            <p>{price}₽</p>
            <button>В корзину</button>
          </div>
          <div class="card-rating">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default RecomendedProduct;
