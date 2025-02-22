import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderMobile from './HeaderMobile';
import MainMenuItem from './MainMenuItem';
import Search from './Search';
import RightMenu from './RightMenu';

function Header({protocol, host, port, order, userData, setUserData }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${protocol}://${host}:${port}/api-category/`)
      .then((data) => setData(data.data.categories));
  }, []);

  const title = document.title;
  function getTel() {
    switch (title) {
      case 'МосПироги':
        return '8-925-168-88-12';
      case 'МосПекарня':
        return '8-925-278-88-76';
      case 'ПиццаРядом':
        return '8-925-228-88-96';
      case 'ПиццаШок':
        return '8-936-938-88-71';
    }
  }

  function getColor() {
    switch (title) {
      case 'МосПироги':
        return '#88DD55';
      case 'МосПекарня':
        return '#f6c814';
      case 'ПиццаРядом':
        return '#FFFFFF';
      case 'ПиццаШок':
        return '#babbdf';
    }
  }

  return (
    <>
      <header>
        <div
          className="green-line"
          style={{ backgroundColor: getColor() }}
        ></div>
        <div className="header-content">
          <div className="logo">
            <div>
              <Link
                to="/index"
                className="logo-name"
                style={{ color: getColor() }}
              >
                {document.title}
              </Link>
              <div
                className="logo-circle"
                style={{ backgroundColor: getColor() }}
              ></div>
            </div>
            <div className="logo-info">
              <p>{getTel()}</p>
              <p>Пн—Вс 8:00—20:00</p>
            </div>
          </div>
          <nav className="header-menu">
            <ul>
              {data?.map((menuItem) => {
                return (
                  <MainMenuItem
                    key={menuItem.id}
                    id={menuItem.id}
                    itemName={menuItem.name}
                    nestedCategories={menuItem.nested_categories}
                  />
                );
              })}
            </ul>
          </nav>
          <HeaderMobile data={data} />
          <div className="right-menu">
            <Search />
            <RightMenu
              protocol={protocol}
              host={host}
              port={port}
              order={order}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
