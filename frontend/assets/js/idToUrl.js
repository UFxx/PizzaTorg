const products = document.querySelectorAll('.product-card');

products.forEach((product) => {
  product.addEventListener('click', () => {
    const productId = product.getAttribute('data-id');
    const url = new URL(`http://127.0.0.1:5500/frontend/product.html`);
    url.searchParams.append('id', productId);
    window.location.href = url.toString();
  });
});
