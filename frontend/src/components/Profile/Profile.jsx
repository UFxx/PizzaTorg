import { useState } from 'react';

function Profile({ userData }) {
  const [canChange, setCanChange] = useState(false);

  function profileExit() {
    localStorage.removeItem('JWT');
    window.location.href = '/index';
  }

  function profileEdit() {}

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
              />
            </div>
            <div>
              <p>Фамилия:</p>
              <input
                type="text"
                defaultValue={userData?.last_name}
                disabled={!canChange}
              />
            </div>
            <div>
              <p>Почта:</p>
              <input
                type="email"
                defaultValue={userData?.email}
                disabled={!canChange}
              />
            </div>
            <div>
              <p>Адрес:</p>
              <input
                type="text"
                defaultValue={userData?.address}
                disabled={!canChange}
              />
            </div>
            <div>
              <p>Телефона:</p>
              <input
                type="tel"
                defaultValue={userData?.phone}
                disabled={!canChange}
              />
            </div>
            <div>
              <p>Новый пароль:</p>
              <input type="password" autoComplete="new-password" />
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
              <button id="profile-save" onClick={() => setCanChange(false)}>
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
