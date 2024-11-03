function OrderItem({ name, price, amount }) {
  function calculateTotal() {
    return price * amount;
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {price}₽ x <span>{amount}</span>
        </td>
        <td>
          {calculateTotal()}
          <span>₽</span>
        </td>
      </tr>
    </>
  );
}

export default OrderItem;
