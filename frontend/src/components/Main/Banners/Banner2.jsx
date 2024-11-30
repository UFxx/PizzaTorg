import category1 from '../../../assets/images/index/banner-img1.png';
import category2 from '../../../assets/images/index/banner-img2.png';

import { Link } from 'react-router-dom';

function Banner2() {
  return (
    <div className="promotion-banner2">
      <Link to="/category?id=3">
        <img src={category1} alt="banner-img category" />
        <p>Пироги</p>
      </Link>
      <Link to="/category?id=11">
        <img src={category2} alt="banner-img category" />
        <p>Пицца</p>
      </Link>
    </div>
  );
}

export default Banner2;
