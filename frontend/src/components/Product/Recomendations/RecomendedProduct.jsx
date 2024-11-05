import RecomendedProductRating from './RecomendedProductRating';

function RecomendedProduct({ id, name, price, photo, ratingScore }) {
  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<RecomendedProductRating key={i} />);
  }
  return (
    <>
      <div className="product-card">
        <a href={`/product?id=${id}`}>
          <img src={photo} alt={name} />
        </a>
        <div className="card-content">
          <div className="card-title">
            <a href={`/product?id=${id}`}>{name}</a>
          </div>
          <div className="card-price">
            <p>{price}₽</p>
            <button>В корзину</button>
          </div>
          <div className="card-rating">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default RecomendedProduct;
