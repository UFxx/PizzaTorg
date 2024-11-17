import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import OrderForm from './components/OrderForm/OrderForm';
import SuccessfulOrder from './components/OrderForm/SuccessfulOrder';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const host = '89.169.38.225';
  const port = '8001';

  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem('order');
    return savedOrder ? JSON.parse(savedOrder) : [];
  });
  const [userData, setUserData] = useState();

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  return (
    <>
      <BrowserRouter>
        <Header
          host={host}
          port={port}
          order={order}
          userData={userData}
          setUserData={setUserData}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main host={host} port={port} order={order} setOrder={setOrder} />
            }
          />
          <Route
            path="/index"
            element={
              <Main host={host} port={port} order={order} setOrder={setOrder} />
            }
          />
          <Route
            path="/category"
            element={
              <Category
                host={host}
                port={port}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product
                host={host}
                port={port}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart order={order} setOrder={setOrder} />}
          />
          <Route
            path="/order-form"
            element={
              <OrderForm
                host={host}
                port={port}
                order={order}
                userData={userData}
              />
            }
          />
          <Route path="/order-successful" element={<SuccessfulOrder />} />
          <Route
            path="/search"
            element={
              <SearchPage
                host={host}
                port={port}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile host={host} port={port} userData={userData} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
