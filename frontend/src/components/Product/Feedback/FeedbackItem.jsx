import FeedbackRating from './FeebackRating';

function FeedbackItem({ username, date, text, ratingScore }) {
  const rating = [];
  for (let i = 0; i < ratingScore; i++) {
    rating.push(<FeedbackRating />);
  }

  return (
    <>
      <div class="feedback-item">
        <p class="feedback-username">{username}</p>
        <p class="feedback-date">{date}</p>
        <p class="feedback-text">{text}</p>
        <p class="feedback-rating">{rating}</p>
      </div>
    </>
  );
}

export default FeedbackItem;
