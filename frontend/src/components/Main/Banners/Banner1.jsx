import banner from '../../../assets/images/index/banner.png';
import arrowLeft from '../../../assets/images/index/arrow-left.png';
import SliderItem from '.././SliderItem';
import { useState, useRef, useEffect } from 'react';

function Banner1() {
  const [sliderOffset, setSliderOffset] = useState(0);
  const slider = useRef();
  const offset = getOffset();

  useEffect(() => {
    const slides = slider.current.childElementCount;

    if (sliderOffset > 0) {
      setSliderOffset((slides - 1) * -offset);
    } else if (sliderOffset <= -slides * offset) {
      setSliderOffset(0);
    }
  }, [sliderOffset]);

  function getOffset() {
    if (window.innerWidth >= 1015) {
      return 750;
    } else if (window.innerWidth < 426) {
      return 270;
    } else if (window.innerWidth < 500) {
      return 320;
    } else if (window.innerWidth < 670) {
      return 400;
    } else if (window.innerWidth < 1015) {
      return 500;
    }
  }

  return (
    <div className="promotion-banner">
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div
        className="button-arrow__left"
        onClick={() => setSliderOffset(sliderOffset + offset)}
      >
        <img src={arrowLeft} alt="" />
      </div>
      <div className="banner-slider">
        <div
          className="banner-slider__line"
          style={{ marginLeft: sliderOffset }}
          ref={slider}
        >
          <SliderItem text="Следующий заказ -5% Самовывоз -10%" />
          <SliderItem text="Быстрая доставка. Каждый день без выходных с 8:30 до 22:00!" />
          <SliderItem text="В День Рождения получи пирог в подарок!" />
          <SliderItem text="При заказе от 1000 рублей - доставка по Москве бесплатно!" />
        </div>
      </div>
      <div
        className="button-arrow__right"
        onClick={() => setSliderOffset(sliderOffset - offset)}
      >
        <img src={arrowLeft} alt="" />
      </div>
    </div>
  );
}

export default Banner1;
