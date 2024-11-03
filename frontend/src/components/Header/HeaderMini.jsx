import { useEffect } from 'react';

function HeaderMini() {
  function toggleMiniMenu() {
    const showMoreButton = document.querySelector('.show-more__button');
    const showMoreMenu = document.querySelector('.show-more__menu');

    showMoreMenu.classList.toggle('show-more__menu-open');
    if (showMoreMenu.classList.contains('show-more__menu-open')) {
      showMoreButton.textContent = 'Скрыть';
    } else {
      showMoreButton.textContent = 'Ещё';
    }
  }

  useEffect(() => {
    if (window.innerWidth > 1100) {
      const showMoreButton = document.querySelector('.show-more__button');
      const showMoreMenu = document.querySelector('.show-more__menu');
      showMoreButton.style.display = 'none';
      showMoreMenu.style.display = 'flex';
      showMoreMenu.style.columnGap = '5px';
    }
  }, []);

  return (
    <div className="header-mini">
      <button className="show-more__button" onClick={toggleMiniMenu}>
        Ещё
      </button>
      <div className="show-more__menu">
        <li>
          <a className="category-link" href="category">
            Соусы
          </a>
        </li>
        <li>
          <a className="category-link" href="category">
            Соленья
          </a>
        </li>
        <li>
          <a className="category-link" href="category">
            Закуски
          </a>
        </li>
        <li>
          <a className="category-link" href="category">
            Горячие мясные блюда
          </a>
        </li>
      </div>
    </div>
  );
}

export default HeaderMini;
