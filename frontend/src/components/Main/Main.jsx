import { useEffect, useRef, useState } from 'react';
import arrowLeft from '../../assets/images/index/arrow-left.png';
import SliderItem from './SliderItem';
import Category from './Category';
import Contacts from './Contacts';
import axios from 'axios';
import banner from '../../assets/images/index/banner.png';
import banner1 from '../../assets/images/index/banner1.png';
import banner2 from '../../assets/images/index/banner2.png';
import banner3 from '../../assets/images/index/banner3.png';

function Main({ host, port, order, setOrder }) {
  const [sliderOffset, setSliderOffset] = useState(0);
  const [allCategories, setAllCategories] = useState();
  const slider = useRef();
  const offset = getOffset();

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

  useEffect(() => {
    const slides = slider.current.childElementCount;

    if (sliderOffset > 0) {
      setSliderOffset((slides - 1) * -offset);
    } else if (sliderOffset <= -slides * offset) {
      setSliderOffset(0);
    }

    axios
      .get(`http://${host}:${port}/api-category/`)
      .then((data) => setAllCategories(data.data.categories));
  }, [sliderOffset]);

  const title = document.title;
  function getImage() {
    switch (title) {
      case 'МосПироги':
        return `url(${banner})`;
      case 'МосПекарня':
        return `url(${banner1})`;
      case 'ПиццаРядом':
        return `url(${banner2})`;
      case 'ПиццаШок':
        return `url(${banner3})`;
    }
  }
  function getMapLink() {
    switch (title) {
      case 'МосПироги':
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.1133896830975!2d37.63206587716607!3d55.70440077306632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b48db1c0e55%3A0x7f6dc4af2d6b7fc5!2z0JDQstGC0L7Qt9Cw0LLQvtC00YHQutCw0Y8g0YPQuy4sIDQsINCc0L7RgdC60LLQsCwgMTE1Mjgw!5e0!3m2!1sru!2sru!4v1732804628878!5m2!1sru!2sru';
      case 'МосПекарня':
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.2736885878726!2d37.66458169367991!3d55.71899570363937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b2bc6eb37dd%3A0x42238a7465d63bc3!2z0J3QvtCy0L7QvtGB0YLQsNC_0L7QstGB0LrQsNGPINGD0LsuLCAxMiwg0JzQvtGB0LrQstCwLCAxMTUwODg!5e0!3m2!1sru!2sru!4v1732805393753!5m2!1sru!2sru';
      case 'ПиццаРядом':
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8045522202715!2d37.72264689366982!3d55.69238570360424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4f98312785d%3A0x492f6243acf140f8!2z0KjQvtGB0YHQtdC50L3QsNGPINGD0LsuLCAyLCDQnNC-0YHQutCy0LAsIDEwOTU0OA!5e0!3m2!1sru!2sru!4v1732805503060!5m2!1sru!2sru';
      case 'ПиццаШок':
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9560253527416!2d37.64725149369513!3d55.75926610369267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a8b9df2be95%3A0xef8b90eb5e67d099!2z0JvRj9C70LjQvSDQv9C10YAuLCA5LCDQnNC-0YHQutCy0LAsIDEwNTA2NA!5e0!3m2!1sru!2sru!4v1732805633642!5m2!1sru!2sru';
    }
  }

  return (
    <>
      <div className="promotion-banner">
        <div
          className="banner-bg"
          style={{ backgroundImage: getImage() }}
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
      <div className="category-container">
        {allCategories?.map((category) => {
          return (
            <Category
              key={category.id}
              host={host}
              port={port}
              name={category.name}
              nestedCategories={category.nested_categories}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
      </div>
      <div className="contacts">
        <Contacts />
        <iframe
          src={getMapLink()}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Main;
