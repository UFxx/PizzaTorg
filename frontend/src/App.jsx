import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import SuccessfulOrder from './components/OrderForm/SuccessfulOrder';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem('order');
    return savedOrder ? JSON.parse(savedOrder) : [];
  });

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

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
          <Route
            path="/cart"
            element={<Cart order={order} setOrder={setOrder} />}
          />
          <Route path="/order-form" element={<OrderForm order={order} />} />
          <Route path="/order-successful" element={<SuccessfulOrder />} />
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
