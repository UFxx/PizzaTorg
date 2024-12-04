import { Link } from 'react-router-dom';

import closeIcon from '../../assets/images/times-white.png';
import axios from 'axios';
import { useState } from 'react';

function Registration({protocol, host, port, setOpenLogin, setOpenRegistration }) {
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  function registration(button) {
    const inputs = button.parentElement.previousElementSibling.childNodes;
    const firstName = inputs[0].value;
    const lastName = inputs[1].value;
    const email = inputs[2].value;
    const phone = inputs[3].value;
    const address = inputs[4].value;
    const password = inputs[5].value;
    const repeatPassword = inputs[6].value;
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address: address,
      password: password,
      repeat_password: repeatPassword
    };
    axios.post(`${protocol}://${host}:${port}/api-register/`, data).then((data) => {
      if (data.status === 201) {
        setOpenLogin(true);
        setOpenRegistration(false);
      }
    });
  }

  function repeatPassword(button) {
    const container = button.parentElement.previousElementSibling;
    const passwordInput = container.children[5];
    const repeatPasswordInput = container.children[6];

    if (passwordInput.value === repeatPasswordInput.value) {
      passwordInput.style.border = '2px solid white';
      repeatPasswordInput.style.border = '2px solid white';
      setIsPasswordValid(true);
      registration(button);
    } else {
      passwordInput.style.border = '2px solid red';
      repeatPasswordInput.style.border = '2px solid red';
      setIsPasswordValid(false);
    }
  }

  function emailValidation(button) {
    const container = button.parentElement.previousElementSibling;
    const email = container.children[2];
    if (email.value === '' || email.value.indexOf('@') === -1) {
      email.style.border = '2px solid red';
      setIsEmailValid(false);
    } else {
      email.style.border = '2px solid white';
      setIsEmailValid(true);
    }
  }

  return (
    <>
      <div className="registration-container">
        <div
          className="registration-background"
          onClick={() => setOpenRegistration(false)}
        ></div>
        <div className="registration-content">
          <form className="registration-form">
            <p>Регистрация</p>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => setOpenRegistration(false)}
            />
            <div className="registration-inputs">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="email" placeholder="Почта" />
              <input type="tel" placeholder="Телефон" />
              <input type="text" placeholder="Адрес" />
              <input
                type="password"
                placeholder="Пароль"
                autoComplete="new-password"
                onKeyDown={(e) =>
                  e.key === 'Enter'
                    ? registration(
                        e.target.parentElement.nextElementSibling.children[0]
                      )
                    : null
                }
              />
              <input
                type="password"
                placeholder="Повторите пароль"
                onKeyDown={(e) =>
                  e.key === 'Enter'
                    ? registration(
                        e.target.parentElement.nextElementSibling.children[0]
                      )
                    : null
                }
              />
              <div className="errors-container">
                {isPasswordValid ? null : <p>Пароли не совпадают</p>}
                {isEmailValid ? null : <p>Почта должна быть заполнена</p>}
              </div>
            </div>
            <div className="registration-buttons">
              <button
                type="button"
                onClick={(e) => {
                  repeatPassword(e.target);
                  emailValidation(e.target);
                }}
              >
                Зарегистрироваться
              </button>
              <Link
                onClick={() => {
                  setOpenLogin(true);
                  setOpenRegistration(false);
                }}
              >
                У меня есть аккаунт
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
