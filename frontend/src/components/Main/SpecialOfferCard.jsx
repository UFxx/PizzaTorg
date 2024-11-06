import ProductRating from '../ProductRating/ProductRating';

import productPhoto from '../../assets/images/index/special-offer-product.png';

function SpecialOfferCard({
  productName,
  productPrice,
  productRating,
  order,
  setOrder
}) {
  const rating = [];
  for (let i = 0; i < productRating; i++) {
    rating.push(<ProductRating key={i} />);
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
            <button onClick={addObject}>В корзину</button>
          </div>
          <div className="card-rating">{rating}</div>
        </div>
      </div>
    </>
  );
}

export default SpecialOfferCard;
