import { Link } from 'react-router-dom';

import arrowRight from '../../../assets/images/index/banner3-arrow.png';

function Banner3() {
  return (
    <div className="promotion-banner3">
      <p>Самая вкусная пицца по мнению всех осетин</p>
      <Link to="/category?id=11">
        <img src={arrowRight} alt="arrow right" />
      </Link>
    </div>
  );
}

export default Banner3;
