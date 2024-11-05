import { Link } from 'react-router-dom';
import arrowDownIcon from '../../assets/images/index/arrow-down.png';

function MainMenuItem({ id, itemName, nestedCategories }) {
  return (
    <>
      <li>
        <Link to="/category" className="category-link">
          {itemName}
          <span>
            <img src={arrowDownIcon} alt="" />
          </span>
          <ul className="menu-item__extended">
            {nestedCategories.map((categorie) => {
              return (
                <li key={categorie.id}>
                  <Link to={`/category?id=${id}`}>{categorie.name}</Link>
                </li>
              );
            })}
          </ul>
        </Link>
      </li>
    </>
  );
}

export default MainMenuItem;
