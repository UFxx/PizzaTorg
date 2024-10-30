document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButtonContainer = document.createElement('div');
  scrollToTopButtonContainer.classList.add('scroll-to-top-button');
  const scrollToTopButtonImage = document.createElement('img');
  scrollToTopButtonImage.setAttribute('src', 'assets/images/scroll-to-top.png');
  scrollToTopButtonImage.setAttribute('alt', 'scroll to top button');
  scrollToTopButtonContainer.appendChild(scrollToTopButtonImage);
  document.body.appendChild(scrollToTopButtonContainer);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      scrollToTopButtonContainer.style.zIndex = 1;
      scrollToTopButtonContainer.style.opacity = 100;
    } else {
      scrollToTopButtonContainer.style.zIndex = -1;
      scrollToTopButtonContainer.style.opacity = 0;
    }
  });

  scrollToTopButtonContainer.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
