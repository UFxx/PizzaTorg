import { useEffect, useState } from 'react';

import OrderItem from './OrderItem';
import OrderResult from './OrderResult';

function OrderForm() {
  const [summary, setSummary] = useState(0);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('tr td:nth-child(2)')
    );
    const summary = elements.reduce(
      (acc, element) => acc + Number(element.innerText.split('₽')[0]),
      0
    );
    setSummary(summary);

    const observer = new MutationObserver((mutations) => {
      const elements = Array.from(
        document.querySelectorAll('tr td:nth-child(2)')
      );
      const summary = elements.reduce(
        (acc, element) => acc + Number(element.innerText.split('₽')[0]),
        0
      );
      setSummary(summary);
    });
    elements.forEach((element) => {
      observer.observe(element, {
        characterData: true,
        childList: true,
        subtree: true
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div class="container">
        <p class="title">Заказ</p>
        <div class="order-content">
          <form action="" class="order__form">
            <input type="text" name="" placeholder="Имя" required />
            <input type="tel" name="" placeholder="Телефон" required />
            <p>Улица, дом, квартира</p>
            <input type="text" name="" placeholder="Адрес" required />
            <textarea placeholder="Комментарий к заказу"></textarea>
          </form>
        </div>
        <div class="order-detail">
          <p class="title">Детали заказа</p>
          <table>
            <tr>
              <th>Название</th>
              <th>Количество</th>
              <th>Итого</th>
            </tr>
            <OrderItem
              name="Осетинский пирог с капустой, луком и грецким орехом."
              price={959}
              amount={1}
            />
            <OrderItem
              name="Осетинский пирог с капустой, луком и грецким орехом."
              price={959}
              amount={1}
            />
          </table>
          <hr />
          <div class="order-result">
            <OrderResult summary={summary} discount={300} delivery={0} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
