import { Link } from 'react-router-dom';

import closeIcon from '../../assets/images/times-white.png';
import axios from 'axios';

function Registration({ setOpenLogin, setOpenRegistration }) {
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

    axios.post('http://localhost:8000/api-register/', data);
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
              <input type="password" placeholder="Пароль" />
              <input type="password" placeholder="Повторите пароль" />
            </div>
            <div className="registration-buttons">
              <button type="button" onClick={(e) => registration(e.target)}>
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
