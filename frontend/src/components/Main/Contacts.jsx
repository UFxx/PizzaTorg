import ContactsItem from './ContactsItem';

function Contacts() {
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
  function getAddress() {
    switch (title) {
      case 'МосПироги':
        return 'Метро Автозаводская, Ул.Автозаводская 4';
      case 'МосПекарня':
        return 'Метро Дубровка, Новоостаповская улица, 12 ст1';
      case 'ПиццаРядом':
        return 'Метро Печатники, Шоссейная улица, 2 к1';
      case 'ПиццаШок':
        return 'Метро Чкаловская, Лялин переулок, 9 ст3';
    }
  }

  return (
    <>
      <div className="contacts-content">
        <ContactsItem title="Контакты:" text={getTel()} />
        <ContactsItem title="Адрес пекарни:" text={getAddress()} />
        <ContactsItem title="Время работы:" text="Пн—Вс. 7:00—20:00" />
      </div>
    </>
  );
}

export default Contacts;
