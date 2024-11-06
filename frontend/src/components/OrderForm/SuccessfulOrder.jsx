import { Link } from 'react-router-dom';

function SuccessfulOrder() {
  return (
    <>
      <div className="container">
        <div className="successful-order">
          <div className="title">Заказ успешно сформирован!</div>
          <div className="successful-order-content">
            <Link to="/index">На главную</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessfulOrder;
