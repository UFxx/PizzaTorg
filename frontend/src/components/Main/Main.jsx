import { useEffect, useState } from 'react';

import Category from './Category';
import Contacts from './Contacts';
import axios from 'axios';
import Banner1 from './Banners/Banner1';
import Banner2 from './Banners/Banner2';
import Banner3 from './Banners/Banner3';

function Main({ host, port, order, setOrder }) {
  const [allCategories, setAllCategories] = useState();
  const title = document.title;

  useEffect(() => {
    axios
      .get(`http://${host}:${port}/api-category/`)
      .then((data) => setAllCategories(data.data.categories));
  }, []);

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
      {title === 'МосПироги' ? <Banner1 /> : null}
      {title === 'МосПекарня' ? <Banner2 /> : null}
      {title === 'ПиццаШок' ? <Banner3 /> : null}
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
