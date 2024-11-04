import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import FeedbackItem from './Feedback/FeedbackItem';
import LeaveFeedbackForm from './Feedback/LeaveFeedbackForm';
import RecomendedProduct from './Recomendations/RecomendedProduct';

function Product({ order, setOrder }) {
  return (
    <>
      <div class="container">
        <ProductContent
          productName="Осетинский пирог с сыром. Уалибах"
          isAvailable={true}
          price={979}
          size={36}
          composition="тесто дрожжевое, осетинский сыр, специи"
          weight={1000}
          averageScore={4.7}
          ratingScore={4}
          order={order}
          setOrder={setOrder}
        />
        <div class="product-description">
          <div class="product-description-title">
            <p>Описание:</p>
          </div>
          <ProductDescription
            description="Осетинский пирог с сыром от нашей пекарни – одно из любимейших угощений.
                        Горячая сочная начинка и тонкая хрустящая корочка понравится всем, кто
                        хочет быстро сделать заказ и вкусно перекусить. Уалибах не просто
                        осетинский пирог – это только натуральные продукты: дрожжевое тесто из
                        муки высшего качества, сыр-цыхт из цельного коровьего молока и ароматные
                        пряности. Мы закупаем ингредиенты ежедневно, чтобы гарантировать их
                        свежесть. Нежный осетинский пирог с сыром буквально тает во рту, а сама
                        лепешка настолько сытная, что вполне заменит полноценный обед. Мы с
                        удовольствием приготовим на заказ для вас осетинский пирог уалибах и
                        быстрая доставка его в специальной термоупаковке гарантирована, – блюдо на
                        вашем столе окажется еще горячим. Выбирайте осетинские пироги с сыром на
                        сайте ПиццаТорг и наслаждайтесь угощением в кругу друзей, коллег дома или
                        в офисе!"
          />
        </div>
        <div class="product-feedback">
          <div class="feedback-title">
            <p>Отзывы:</p>
          </div>
          <div class="feedback-content">
            <FeedbackItem
              username="Анна"
              date="17 октября 2022 11:33"
              text="Здравствуйте! Благодарю за очень вкусные осетинские пироги с сыром и
                    пиццу. Служба доставки доставила вовремя. Рекомендую! Успехов вам в
                    работе:)"
              ratingScore={5}
            />
            <button class="show-more">Показать еще</button>
          </div>
        </div>
        <div class="leave-a-feedback">
          <div class="leave-a-feedback__title">Оставить отзыв</div>
          <LeaveFeedbackForm />
        </div>
        <div class="recomended-products">
          <p class="recomended-products__title">
            Покупатели, которые приобрели Осетинский пирог с сыром. Уалибах,
            также купили:
          </p>
          <div class="recomended-products-content">
            <RecomendedProduct
              name="Осетинский пирог с сыром. Уалибах"
              price={979}
              ratingScore={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
