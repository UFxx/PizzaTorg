import { useState } from 'react';
import axios from 'axios';

function Profile({ host, port, userData }) {
  const [canChange, setCanChange] = useState(false);

  function profileExit() {
    localStorage.removeItem('JWT');
    window.location.href = '/index';
  }

  function profileEdit(button) {
    const form = button.parentElement.previousElementSibling;
    const firstName = form.children[0].children[1];
    const lastName = form.children[1].children[1];
    const email = form.children[2].children[1];
    const address = form.children[3].children[1];
    const phone = form.children[4].children[1];

    const config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('JWT') }
    };

    axios
      .patch(
        `http://${host}:${port}/api-user_detail/`,
        {
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          address: address.value,
          phone: phone.value
        },
        config
      )
      .then((data) => {
        if (data.status === 200) {
          setCanChange(false);
        }
      });
  }

  return (
    <>
      <div className="container">
        <div className="profile-content">
          <p>Профиль</p>
          <form className="profile-form">
            <div>
              <p>Имя:</p>
              <input
                type="text"
                defaultValue={userData?.first_name}
                disabled={!canChange}
                autoComplete="name"
              />
            </div>
            <div>
              <p>Фамилия:</p>
              <input
                type="text"
                defaultValue={userData?.last_name}
                disabled={!canChange}
                autoComplete="family-name"
              />
            </div>
            <div>
              <p>Почта:</p>
              <input
                type="email"
                defaultValue={userData?.email}
                disabled={!canChange}
                autoComplete="email"
              />
            </div>
            <div>
              <p>Адрес:</p>
              <input
                type="text"
                defaultValue={userData?.address}
                disabled={!canChange}
                autoComplete="street-address"
              />
            </div>
            <div>
              <p>Телефон:</p>
              <input
                type="tel"
                defaultValue={userData?.phone}
                disabled={!canChange}
                autoComplete="tel"
              />
            </div>
          </form>
          <div className="profile-buttons">
            <button id="profile-exit" onClick={profileExit}>
              Выйти
            </button>
            {!canChange && (
              <button onClick={() => setCanChange(true)}>Изменить</button>
            )}
            {canChange && (
              <button
                id="profile-save"
                onClick={(e) => {
                  profileEdit(e.target);
                }}
              >
                Сохранить
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
