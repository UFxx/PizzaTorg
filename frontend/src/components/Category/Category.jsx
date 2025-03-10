import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

function Category({protocol, host, port, order, setOrder }) {
  const [data, setData] = useState();
  const [categoryProducts, setCategoryProducts] = useState();

  let categoryId;
  if (!new URL(document.location).searchParams.get('id')) {
    window.location.href = '/index';
  } else {
    categoryId = new URL(document.location).searchParams.get('id');
  }

  useEffect(() => {
    axios
      .get(`${protocol}://${host}:${port}/api-category_detail/${categoryId}/`)
      .then((data) => setData(data.data));

    axios
      .get(`${protocol}://${host}:${port}/api-product_cards_list/${categoryId}/`)
      .then((data) => setCategoryProducts(data.data.products));
  }, []);

  return (
    <>
      <div className="container">
        <p className="category-name">{data?.name}</p>
        <p className="category-description">{data?.description}</p>
        <div className="products">
          {categoryProducts?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                productName={product.name}
                productPrice={product.price}
                productRating={product.get_rating}
                productImage={product.image}
                order={order}
                setOrder={setOrder}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
