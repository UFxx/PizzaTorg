import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [order, setOrder] = useState();

  useEffect(() => {
    if (localStorage.getItem('order') === null) {
      localStorage.setItem('order', JSON.stringify([]));
      setOrder(localStorage.setItem('order'));
    } else {
      setOrder(JSON.parse(localStorage.getItem('order')));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header order={order} />
        <Routes>
          <Route
            path="/"
            element={<Main order={order} setOrder={setOrder} />}
          />
          <Route
            path="/index"
            element={<Main order={order} setOrder={setOrder} />}
          />
          <Route
            path="/category"
            element={<Category order={order} setOrder={setOrder} />}
          />
          <Route
            path="/product"
            element={<Product order={order} setOrder={setOrder} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route
            path="/search"
            element={<SearchPage order={order} setOrder={setOrder} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
