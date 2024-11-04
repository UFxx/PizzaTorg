import SpecialOfferCard from './SpecialOfferCard';

import promotionBg from '../../assets/images/index/promotion-bg.png';

import deliveryIcon from '../../assets/images/index/benefit-delivery-icon.png';
import couponIcon from '../../assets/images/index/benefit-coupon-icon.png';
import bakeryIcon from '../../assets/images/index/benefit-bakery-icon.png';

function Main({ order, setOrder }) {
  return (
    <>
      <div className="container">
        <div className="promotions">
          <div className="promotion">
            <p>Следующий заказ -5% Самовывоз -10%</p>
            <img src={promotionBg} alt="" />
          </div>
          <div className="promotion">
            <p>Быстрая доставка. Каждый день без выходных с 8:30 до 22:00!</p>
            <img src={promotionBg} alt="" />
          </div>
          <div className="promotion">
            <p>В День Рождения получи пирог в подарок!</p>
            <img src={promotionBg} alt="" />
          </div>
          <div className="promotion">
            <p>При заказе от 1000 рублей - доставка по Москве бесплатно!</p>
            <img src={promotionBg} alt="" />
          </div>
        </div>
        <div className="special-offer">
          <p className="special-offer__title">
            Спецпредложение на 29 октября 2024
          </p>
          <div className="special-offer-content">
            <SpecialOfferCard
              productName="Осетинский пирог с сыром. Уалибах"
              productPrice="979"
              productRating={3}
              order={order}
              setOrder={setOrder}
            />
            <SpecialOfferCard
              productName="Осетинский пирог с сыром. Уалибах"
              productPrice="979"
              productRating={3}
              order={order}
              setOrder={setOrder}
            />
            <SpecialOfferCard
              productName="Осетинский пирог с сыром. Уалибах"
              productPrice="979"
              productRating={3}
              order={order}
              setOrder={setOrder}
            />
          </div>
        </div>
        <div className="our-benefits">
          <div className="benefit">
            <div className="benefit-title">
              <img src={deliveryIcon} alt="" />
              <p className="benefit-name">Доставка в Москве</p>
            </div>
            <p className="benefit-description">
              Мы доставим ваш заказ курьером по Москве! При самовывозе скидка
              10%
            </p>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <img src={couponIcon} alt="" />
              <p className="benefit-name">Получи купон на скидку!</p>
            </div>
            <p className="benefit-description">
              При первом заказе вы получаете купон на скидку 5%! При следующем
              заказе Вам нужно только назвать номер купона!
            </p>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <img src={bakeryIcon} alt="" />
              <p className="benefit-name">Пекарня в Москве</p>
            </div>
            <p className="benefit-description">
              Заказ на доставку осетинских пирогов, улица Нижняя Радищевская
              улица, 5 м.Таганская. Самовывоз осуществляется с метро
              Преображенская площадь.
            </p>
          </div>
        </div>
        <div className="about-site">
          <p>
            Осетинские пироги - одно из любимых и популярных лакомств, не только
            на их родине в Осетии, но и по всей стране. Многие источники
            утверждают, что именно осетинские пироги стали прародителем
            популярной итальянской пиццы. Наши пироги невозможно сравнить ни с
            каким блюдом во всем мире. Великолепный вкус, волшебный аромат -
            заказав пирог, очень сложно отказаться от искушения тут же
            немедленно при получении доставки откусить от него кусочек.
            <br />
            <br />
            Плоские круглые пироги выпекаются на оригинальном дрожжевом тесте.
            Тесто тонко раскатывается и наполняется любой разнообразной
            начинкой: мясом (говядиной, курочкой, индейкой, телятиной),
            национальным осетинским сыром, картофелем или капустой или
            кабачками, луком и пр. Пирог запечатывается в центре,
            переворачивается швом вниз на противень, аккуратно прижимается
            ладонью. Таким образом распределяется начинка равномерно. После
            выпечки горячий пирог поливается растопленным сливочным маслом.
            <br />
            <br />
            Что бы заказать пироги, Вам придется выбирать из множества начинок.
            На нежное тесто укладываются картошка, мясо, капуста, курочка,
            грибы, семга, зелень, специи и многие другие начинки. Все это щедро
            дополняется настоящим свежайшим сыром. Осетинский пирог невозможно
            сделать без осетинского сыра - именно он душа блюда. Сочные пироги
            станут украшением любого стола: и дружеской вечеринки,
            торжественного обеда и в офис на корпоратив.
            <br />
            <br />
            Доставка осетинских пирогов
            <br />
            <br />
            Чтобы попробовать вкуснейшие пироги, поразить своих домочадцев,
            угостить любимого или возлюбленную не нужно идти в ресторан -
            достаточно заказать с доставкой на дом или в офис и волшебное нежное
            сочное блюдо буквально с пылу с жару будет украшать вашу трапезу.
            Это волшебная возможность окунуться в мир вкуса и наслаждения.
            Узнать условия доставки осетинских пирогов можно на соответствующей
            странице.
            <br />
            <br />
            <br />А на десерт можно заказать осетинские пироги с сладкой
            начинкой:
            <br />
            <br />с ягодами и фруктами;
            <br />с творогом;
            <br />с яблоками и корицей.
            <br />
            <br />
            Оформляйте заказ и наслаждайтесь их потрясающим вкусом. Пироги к Вам
            прибудут горячими и в срок. Мы ценим отношение наших клиентов и
            следим как за качеством продукции так и за качеством обслуживания.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
