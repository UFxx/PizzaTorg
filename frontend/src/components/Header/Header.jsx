import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderMobile from './HeaderMobile';
import MainMenuItem from './MainMenuItem';
import Search from './Search';

import cartIcon from '../../assets/images/cart.png';

function Header({ order }) {
  const [data, setData] = useState();

  function calculateTotalCartPrice() {
    let sum = 0;

    order?.forEach((orderItem) => {
      sum += parseInt(orderItem.price) * orderItem.amount;
    });

    return sum;
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api-category/')
      .then((data) => setData(data.data.categories));
  }, []);

  return (
    <>
      <header>
        <div className="green-line"></div>
        <div className="header-content">
          <div className="logo">
            <div>
              <Link to="/index" className="logo-name">
                ПиццаТорг
              </Link>
              <div className="logo-circle"></div>
            </div>
            <div className="logo-info">
              <p>8-999-571-88-86</p>
              <p>Пн—Вс 7:00—20:00</p>
            </div>
          </div>
          <nav className="header-menu">
            <ul>
              {data?.map((menuItem) => {
                return (
                  <MainMenuItem
                    key={menuItem.id}
                    id={menuItem.id}
                    itemName={menuItem.name}
                    nestedCategories={menuItem.nested_categories}
                  />
                );
              })}
            </ul>
          </nav>
          <HeaderMobile data={data} />
          <div className="right-menu">
            <Search />
            <div className="cart">
              <Link to="/cart" className="cart-icon">
                <img src={cartIcon} alt="" />
              </Link>
              <Link to="/cart">{calculateTotalCartPrice()}₽</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;