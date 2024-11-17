import { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

function Subcategory({ host, port, id, name, order, setOrder }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`http://${host}:${port}/api-product_cards_list/${id}/`)
      .then((data) => setProducts(data.data.products));
  }, []);

  return (
    <>
      <div className="subcategory-title">
        <p>{name}</p>
        <div className="category-line"></div>
      </div>
      <div className="category-content">
        {products?.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              img={product.image}
              name={product.name}
              price={product.price}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
      </div>
    </>
  );
}

export default Subcategory;
