function ContactsItem({ title, text }) {
  return (
    <div className="contacts-item">
      <p className="contacts-item__title">{title}</p>
      <p className="contacts-item__text">{text}</p>
    </div>
  );
}

export default ContactsItem;
