import ProductCard from '../Category/ProductCard';

import axios from 'axios';
import { useEffect, useState } from 'react';

function SearchPage({ host, order, setOrder }) {
  const [data, setData] = useState();

  const searchText = new URL(window.location).searchParams.get('search');

  useEffect(() => {
    axios
      .get(`http://${host}:8000/api-product_cards_list/0/?search=${searchText}`)
      .then((data) => setData(data.data.products));
  }, []);

  return (
    <>
      <div className="container">
        <div className="search-content">
          <div className="products">
            {data?.length < 1 ? (
              <p style={{ fontSize: 24 }}>Ничего не найдено</p>
            ) : (
              data?.map((product) => {
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
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchPage;
