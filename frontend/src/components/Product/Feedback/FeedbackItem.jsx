import ProductRating from '../../ProductRating/ProductRating';

function FeedbackItem({ username, commentDate, text, ratingScore }) {
  console.log(username);

  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<ProductRating key={i} />);
  }
  const date = new Date(commentDate);

  let months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
      <div className="feedback-item">
        <p className="feedback-username">{username}</p>
        <p className="feedback-date">{`${day} ${month} ${year} ${hours}:${
          minutes < 10 ? '0' + minutes : minutes
        }`}</p>
        <p className="feedback-text">{text}</p>
        <p className="feedback-rating">{rating}</p>
      </div>
    </>
  );
}

export default FeedbackItem;
