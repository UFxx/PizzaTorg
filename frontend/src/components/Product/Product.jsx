import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import FeedbackItem from './Feedback/FeedbackItem';
import LeaveFeedbackForm from './Feedback/LeaveFeedbackForm';
import RecomendedProduct from './Recomendations/RecomendedProduct';

import { useEffect, useState } from 'react';
import axios from 'axios';

function Product({ host, port, order, setOrder }) {
  const [aboutProduct, setAboutProduct] = useState();
  const [productFeedback, setProductFeedback] = useState();

  const productId = new URL(window.location).searchParams.get('id');

  useEffect(() => {
    axios
      .get(`http://${host}:${port}/api-product_detail/${productId}/`)
      .then((data) => setAboutProduct(data.data));

    axios
      .get(`http://${host}:${port}/api-comment_list/${productId}`)
      .then((data) => setProductFeedback(data.data.comments));
  }, []);

  return (
    <>
      <div className="container">
        <ProductContent
          id={productId}
          productName={aboutProduct?.name}
          isAvailable={true}
          productPhoto={aboutProduct?.image}
          price={aboutProduct?.price}
          size={aboutProduct?.size}
          ingredients={aboutProduct?.ingredients}
          weight={aboutProduct?.weight}
          ratingScore={aboutProduct?.get_rating}
          order={order}
          setOrder={setOrder}
        />
        <div className="product-description">
          <div className="product-description-title">
            <p>Описание:</p>
          </div>
          <ProductDescription description={aboutProduct?.description} />
        </div>
        <div className="product-feedback">
          <div className="feedback-title">
            <p>Отзывы:</p>
          </div>
          <div className="feedback-content">
            {productFeedback?.map((feedback) => {
              return (
                <FeedbackItem
                  key={feedback.id}
                  username={feedback.username}
                  commentDate={feedback.created}
                  text={feedback.text}
                  ratingScore={feedback.rating}
                />
              );
            })}
            <button className="show-more">Показать еще</button>
          </div>
        </div>
        <div className="leave-a-feedback">
          <div className="leave-a-feedback__title">Оставить отзыв</div>
          <LeaveFeedbackForm host={host} productId={productId} />
        </div>
        {aboutProduct?.get_similar_products.length < 1 ? null : (
          <div className="recomended-products">
            <p className="recomended-products__title">
              Покупатели, которые приобрели {aboutProduct?.name}, также купили:
            </p>
            <div className="recomended-products-content">
              {aboutProduct?.get_similar_products?.map((similarProduct) => {
                return (
                  <RecomendedProduct
                    key={similarProduct.id}
                    id={similarProduct.id}
                    name={similarProduct.name}
                    price={similarProduct.price}
                    photo={similarProduct.image}
                    ratingScore={similarProduct.get_rating}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
