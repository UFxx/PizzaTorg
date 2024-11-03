import ProductCard from './ProductCard';

function Category() {
  return (
    <>
      <div className="container">
        <p className="category-name">Осетинские пироги</p>
        <p className="category-description">
          Мы понимаем, как важно сытно и вкусно перекусить, особенно если вы
          ждете гостей или ограничены во времени. Быстро доставляем осетинские
          пироги в Кузьминки, Жулебино, Люблино, Братиславская, Марьино,
          Дубровка, Кожуховская, Котельники, Орехово, Домодедовская, Таганская и
          любые другие районы Москвы. Угощайте друзей и кушайте сами, берите с
          собой на пикник и в дорогу осетинские пироги. Вкусные, горячие, сочные
          осетинские пироги с доставкой в Москве - это домашняя кухня в лучших
          осетинских традициях. Попробуйте приготовленные пироги нашими
          поварами!
        </p>
        <div className="products">
          <ProductCard
            productName="Осетинский пирог с сыром. Уалибах"
            productPrice="979"
            productRating={4}
          />
          <ProductCard
            productName="Осетинский пирог с сыром. Уалибах"
            productPrice="979"
            productRating={4}
          />
          <ProductCard
            productName="Осетинский пирог с сыром. Уалибах"
            productPrice="979"
            productRating={4}
          />
          <ProductCard
            productName="Осетинский пирог с сыром. Уалибах"
            productPrice="979"
            productRating={4}
          />
        </div>
      </div>
    </>
  );
}

export default Category;
