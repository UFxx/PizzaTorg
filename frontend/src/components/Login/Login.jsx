import { Link } from 'react-router-dom';

import closeIcon from '../../assets/images/times-white.png';
import axios from 'axios';

function Login({ setOpenLogin, setOpenRegistration }) {
  function login(button) {
    const username =
      button.parentElement.previousElementSibling.previousElementSibling.value;
    const password = button.parentElement.previousElementSibling.value;

    const data = {
      username: username,
      password: password
    };

    axios.post('http://localhost:8000/auth/jwt/create', data).then((data) => {
      localStorage.setItem('JWT', data.data.access);
    });
  }

  return (
    <>
      <div className="login-container">
        <div
          className="login-background"
          onClick={() => setOpenLogin(false)}
        ></div>
        <div className="login-content">
          <form className="login-form">
            <p>Вход</p>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => setOpenLogin(false)}
            />
            <input type="text" placeholder="Логин" />
            <input type="password" placeholder="Пароль" />
            <div className="login-buttons">
              <button type="button" onClick={(e) => login(e.target)}>
                Войти
              </button>
              <Link
                onClick={() => {
                  setOpenLogin(false);
                  setOpenRegistration(true);
                }}
              >
                У меня нет аккаунта
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
