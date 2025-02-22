import { Link } from 'react-router-dom';

import closeIcon from '../../assets/images/times-white.png';
import axios from 'axios';

function Login({protocol, host, port, setOpenLogin, setOpenRegistration }) {
  function login(button) {
    const username =
      button.parentElement.previousElementSibling.previousElementSibling;
    const password = button.parentElement.previousElementSibling;

    const data = {
      username: username.value,
      password: password.value
    };

    axios
      .post(`${protocol}://${host}:${port}/auth/jwt/create`, data)
      .then((data) => {
        localStorage.setItem('JWT', data.data.access);
        if (data.status === 200) {
          window.location.href = '/profile';
        }
      })
      .catch((err) => {
        [username, password].forEach((input) => {
          input.style.border = '2px solid red';
        });
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
            <input
              type="text"
              placeholder="Почта"
              autoComplete="email"
              onKeyUp={(e) =>
                e.key === 'Enter'
                  ? login(
                      e.target.nextElementSibling.nextElementSibling.children[0]
                    )
                  : null
              }
            />
            <input
              type="password"
              placeholder="Пароль"
              autoComplete="current-password"
              onKeyUp={(e) =>
                e.key === 'Enter'
                  ? login(e.target.nextElementSibling.children[0])
                  : null
              }
            />
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
