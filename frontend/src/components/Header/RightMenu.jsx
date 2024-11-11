import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import cartIcon from '../../assets/images/cart.png';
import profileIcon from '../../assets/images/profile-icon.png';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';

function RightMenu({ order }) {
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);

  useEffect(() => {
    if (openLogin || openRegistration) {
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
        <div className="profile" onClick={() => setOpenLogin(true)}>
          <img src={profileIcon} alt="" />
          <p>Профиль</p>
        </div>
      </div>
      {openLogin ? (
        <Login
          setOpenLogin={setOpenLogin}
          setOpenRegistration={setOpenRegistration}
        />
      ) : null}
      {openRegistration ? (
        <Registration
          setOpenLogin={setOpenLogin}
          setOpenRegistration={setOpenRegistration}
        />
      ) : null}
    </>
  );
}

export default RightMenu;
