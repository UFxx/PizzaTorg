const showMoreButton = document.querySelector('.show-more__button');
const showMoreMenu = document.querySelector('.show-more__menu');

showMoreButton.addEventListener('click', () => {
  showMoreMenu.classList.toggle('show-more__menu-open');
  if (showMoreMenu.classList.contains('show-more__menu-open')) {
    showMoreButton.textContent = 'Скрыть';
  } else {
    showMoreButton.textContent = 'Ещё';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1100) {
    showMoreButton.style.display = 'none';
    showMoreMenu.style.display = 'flex';
    showMoreMenu.style.columnGap = '5px';
  }
});

const mobileMenuButton = document.querySelector('.header-mobile-menu button');
const mobileMenu = document.querySelector('.header-mobile-menu ul');
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('header-mobile-menu__open');
});

const mobileMenuItem = document.querySelectorAll('.mobile-menu-category-link');
const extendedMenus = document.querySelectorAll('.mobile-menu__extended');
mobileMenuItem.forEach((item) => {
  item.addEventListener('click', () => {
    extendedMenus.forEach((menu) => {
      menu.style.display = 'none';
    });
    item.parentElement.childNodes[2].style.display = 'flex';
    console.log(item.parentElement.childNodes[2]);
  });
});
