import { Link } from 'react-router-dom';
import HeaderMini from './HeaderMini';
import HeaderMobile from './HeaderMobile';

import arrowDownIcon from '../../assets/images/index/arrow-down.png';
import searchIcon from '../../assets/images/search-button.png';
import cartIcon from '../../assets/images/cart.png';
import { useEffect } from 'react';

function Header({ order }) {
  let sum = 0;

  function calculateTotalCartPrice() {
    if (order) {
      order.forEach((orderItem) => {
        sum += parseInt(orderItem.price);
      });
    }

    return sum;
  }

  useEffect(() => {
    calculateTotalCartPrice();
  });

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
              <li>
                <a className="category-link" href="category">
                  Доставка и самовывоз{' '}
                </a>
              </li>
              <li>
                <Link to="/category" className="category-link">
                  Осетинские пироги
                  <span>
                    <img src={arrowDownIcon} alt="" />
                  </span>
                  <ul className="menu-item__extended">
                    <li>
                      <Link to="/category">Пироги с мясом</Link>
                    </li>
                    <li>
                      <Link to="/category">Пироги с картофелем</Link>
                    </li>
                    <li>
                      <Link to="/category">Пироги с сыром</Link>
                    </li>
                    <li>
                      <Link to="/category">Пироги с рыбой</Link>
                    </li>
                    <li>
                      <Link to="/category">Пироги с овощами</Link>
                    </li>
                    <li>
                      <Link to="/category">Пироги с курицей</Link>
                    </li>
                    <li>
                      <Link to="/category">Сладкие осетинские пироги</Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <ul className="menu-item__extended">
                  <li>
                    <Link to="/category">Классическая</Link>
                  </li>
                  <li>
                    <Link to="/category">Мясная</Link>
                  </li>
                  <li>
                    <Link to="/category">Вегетерианская</Link>
                  </li>
                  <li>
                    <Link to="/category">Острая пицца</Link>
                  </li>
                  <li>
                    <Link to="/category">С морепродуктами</Link>
                  </li>
                </ul>
                <a className="category-link" href="category">
                  Пицца
                  <span>
                    <img src={arrowDownIcon} alt="arrow down" />
                  </span>
                </a>
              </li>
              <HeaderMini />
            </ul>
          </nav>
          <HeaderMobile />
          <div className="right-menu">
            <div className="search">
              <input type="search" placeholder="Поиск товара" />
              <div className="search-button">
                <img src={searchIcon} alt="search button" />
              </div>
            </div>
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
