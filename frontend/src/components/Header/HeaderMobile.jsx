import HeaderMobileItem from './HeaderMobileItem';

function HeaderMobile({ data }) {
  function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.header-mobile-menu__list');
    mobileMenu.classList.toggle('header-mobile-menu__open');
  }

  return (
    <>
      <nav className="header-mobile-menu">
        <button onClick={toggleMobileMenu}>Меню</button>
        <ul className="header-mobile-menu__list">
          {data?.map((menuItem) => {
            return (
              <HeaderMobileItem
                key={menuItem.id}
                id={menuItem.id}
                itemName={menuItem.name}
                nestedCategories={menuItem.nested_categories}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default HeaderMobile;
