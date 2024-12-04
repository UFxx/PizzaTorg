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
  const protocol = 'https'
  const host = 'pirogimsc.ru';
  const port = getPort();

  function getPort() {
    const title = document.title;
    switch (title) {
      case 'МосПироги':
        return 8001;
      case 'МосПекарня':
        return 8002;
      case 'ПиццаРядом':
        return 8003;
      case 'ПиццаШок':
        return 8004;
    }
  }

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
          protocol={protocol}
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
              <Main protocol={protocol} host={host} port={port} order={order} setOrder={setOrder} />
            }
          />
          <Route
            path="/index"
            element={
              <Main protocol={protocol} host={host} port={port} order={order} setOrder={setOrder} />
            }
          />
          <Route
            path="/category"
            element={
              <Category
                protocol={protocol}
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
                protocol={protocol}
                host={host}
                port={port}
                userData={userData}
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
                protocol={protocol}
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
                protocol={protocol}
                host={host}
                port={port}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile protocol={protocol} host={host} port={port} userData={userData} />}
          />
          <Route path="*" element={<Main protocol={protocol} host={host} port={port} order={order} setOrder={setOrder} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
