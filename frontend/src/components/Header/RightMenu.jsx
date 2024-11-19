import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import cartIcon from '../../assets/images/cart.png';
import profileIcon from '../../assets/images/profile-icon.png';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import axios from 'axios';

function RightMenu({ host, port, order, userData, setUserData }) {
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);

  useEffect(() => {
    setOpenRightMenu(false);

    if (localStorage.getItem('JWT')) {
      const config = {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('JWT') }
      };

      axios
        .get(`http://${host}:${port}/api-user_detail/`, config)
        .then((data) => setUserData(data.data));
    }

    if ((openLogin || openRegistration) && !localStorage.getItem('JWT')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openLogin, openRegistration]);

  function calculateTotalCartPrice() {
    let sum = 0;

    order?.forEach((orderItem) => {
      sum += parseInt(orderItem.price) * orderItem.amount;
    });

    return sum;
  }
  return (
    <>
      <div
        className="right-menu-button"
        onClick={() => setOpenRightMenu(!openRightMenu)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        style={{ display: openRightMenu ? 'flex' : 'none' }}
        className="right-menu-container"
      >
        <div className="cart">
          <Link to="/cart" className="cart-icon">
            <img src={cartIcon} alt="" />
          </Link>
          <Link to="/cart">{calculateTotalCartPrice()}₽</Link>
        </div>
        <Link
          to={localStorage.getItem('JWT') ? '/profile' : null}
          className="profile"
          onClick={() => setOpenLogin(true)}
        >
          <img src={profileIcon} alt="" />
          {localStorage.getItem('JWT') ? (
            <p>{userData?.first_name}</p>
          ) : (
            <p>Войти</p>
          )}
        </Link>
      </div>
      {openLogin && !localStorage.getItem('JWT') ? (
        <Login
          host={host}
          port={port}
          setOpenLogin={setOpenLogin}
          setOpenRegistration={setOpenRegistration}
        />
      ) : null}
      {openRegistration && !localStorage.getItem('JWT') ? (
        <Registration
          host={host}
          port={port}
          setOpenLogin={setOpenLogin}
          setOpenRegistration={setOpenRegistration}
        />
      ) : null}
    </>
  );
}

export default RightMenu;
