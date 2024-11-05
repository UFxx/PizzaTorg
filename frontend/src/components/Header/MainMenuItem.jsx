import { Link } from 'react-router-dom';
import arrowDownIcon from '../../assets/images/index/arrow-down.png';

function MainMenuItem({ id, itemName, nestedCategories }) {
  function refreshPage() {
    setTimeout(() => {
      window.location.href = new URL(window.location);
    }, 0);
  }

  return (
    <>
      <li>
        <div className="category-link">
          {itemName}
          <span>
            <img src={arrowDownIcon} alt="" />
          </span>
          <ul className="menu-item__extended">
            <li>
              <Link to={`/category?id=${id}`} onClick={refreshPage}>
                {itemName}
              </Link>
            </li>
            {nestedCategories.map((categorie) => {
              return (
                <li key={categorie.id}>
                  <Link
                    to={`/category?id=${categorie.id}`}
                    onClick={refreshPage}
                  >
                    {categorie.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
}

export default MainMenuItem;
