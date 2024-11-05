import { Link } from 'react-router-dom';
import arrowDownIcon from '../../assets/images/index/arrow-down.png';

function HeaderMobileItem({ id, itemName, nestedCategories }) {
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
      <li onClick={(e) => openMenuItem(e.target)}>
        <p className="mobile-menu-category-link">
          {itemName}
          <span>
            <img src={arrowDownIcon} alt="" />
          </span>
          <div className="mobile-menu__extended">
            <ul>
              {nestedCategories?.map((categorie) => {
                return (
                  <li key={categorie.id}>
                    <Link to="/category">{categorie.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </p>
      </li>
    </>
  );
}

export default HeaderMobileItem;
