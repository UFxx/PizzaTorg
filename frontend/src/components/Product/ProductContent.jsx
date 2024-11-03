import ProductRating from './ProductRating';

import productPhoto from '../../assets/images/product-img.png';

function ProductContent({
  isAvailable,
  price,
  size,
  composition,
  weight,
  averageScore,
  ratingScore
}) {
  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<ProductRating />);
  }

  return (
    <>
      <div class="product-content">
        <div class="product-img">
          <img src={productPhoto} alt="" />
        </div>
        <div class="product-info">
          <p class="available">{isAvailable}</p>
          <p class="price">{price}₽ за 1 шт.</p>
          <div class="add-to-cart__container">
            <input type="number" defaultValue="1" /> шт.
            <button>Добавить в корзину</button>
          </div>
          <div class="characteristics">
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
          <div class="rating">
            Средняя оценка: <span>{averageScore}</span>
          </div>
          <div class="rating-stars">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default ProductContent;
