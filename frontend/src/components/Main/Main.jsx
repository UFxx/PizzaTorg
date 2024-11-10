import { useEffect, useState } from 'react';
import arrowLeft from '../../assets/images/index/arrow-left.png';
import SliderItem from './SliderItem';
import Category from './Category';
import axios from 'axios';

function Main({ order, setOrder }) {
  const [sliderOffset, setSliderOffset] = useState(0);
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    if (sliderOffset > 0) {
      setSliderOffset(3 * -750);
    } else if (sliderOffset <= -3000) {
      setSliderOffset(0);
    }

    axios
      .get('http://127.0.0.1:8000/api-category/')
      .then((data) => setAllCategories(data.data.categories));
  }, [sliderOffset]);

  return (
    <>
      <div className="promotion-banner">
        <div className="banner-bg"></div>
        <div
          className="button-arrow__left"
          onClick={() => setSliderOffset(sliderOffset + 750)}
        >
          <img src={arrowLeft} alt="" />
        </div>
        <div className="banner-slider">
          <div
            className="banner-slider__line"
            style={{ marginLeft: sliderOffset }}
          >
            <SliderItem text="Следующий заказ -5% Самовывоз -10%" />
            <SliderItem text="Быстрая доставка. Каждый день без выходных с 8:30 до 22:00!" />
            <SliderItem text="В День Рождения получи пирог в подарок!" />
            <SliderItem text="При заказе от 1000 рублей - доставка по Москве бесплатно!" />
          </div>
        </div>
        <div
          className="button-arrow__right"
          onClick={() => setSliderOffset(sliderOffset - 750)}
        >
          <img src={arrowLeft} alt="" />
        </div>
      </div>
      <div className="category-container">
        {allCategories?.map((category) => {
          return (
            <Category
              key={category.id}
              name={category.name}
              nestedCategories={category.nested_categories}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
