import { Link } from 'react-router-dom';

import arrowDownIcon from '../../assets/images/index/arrow-down.png';

function HeaderMobile() {
  function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.header-mobile-menu ul');
    mobileMenu.classList.toggle('header-mobile-menu__open');
  }

  function openMenuItem(item) {
    const itemContainer = item.closest('.header-mobile-menu__list');

    itemContainer.childNodes.forEach((child) => {
      const itemMenuExtended = child.children[0].childNodes[2];
      if (itemMenuExtended) {
        itemMenuExtended.style.display = 'none';
      }
    });
    item.lastChild.style.display = 'flex';
  }

  return (
    <>
      <nav className="header-mobile-menu">
        <button onClick={toggleMobileMenu}>Меню</button>
        <ul className="header-mobile-menu__list">
          <li>
            <a className="mobile-menu-category-link" href="category">
              Доставка и самовывоз
            </a>
          </li>
          <li onClick={(e) => openMenuItem(e.target)}>
            <p className="mobile-menu-category-link">
              Осетинские пироги
              <span>
                <img src={arrowDownIcon} alt="" />
              </span>
              <div className="mobile-menu__extended">
                <ul>
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
              </div>
            </p>
          </li>
          <li
            onClick={(e) => {
              openMenuItem(e.target);
            }}
          >
            <p className="mobile-menu-category-link">
              Пицца
              <span>
                <img src={arrowDownIcon} alt="" />
              </span>
              <div className="mobile-menu__extended">
                <ul>
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
              </div>
            </p>
          </li>
          <li>
            <a className="mobile-menu-category-link" href="category">
              Соусы
            </a>
          </li>
          <li>
            <a className="mobile-menu-category-link" href="category">
              Соленья
            </a>
          </li>
          <li>
            <a className="mobile-menu-category-link" href="category">
              Закуски
            </a>
          </li>
          <li>
            <a className="mobile-menu-category-link" href="category">
              Горячие мясные блюда
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderMobile;
