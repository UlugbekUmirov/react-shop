export default function BasketItem(props) {
  const { id, name, price, quanity, removefromBasket, Increment, Dicrement } =
    props;
  return (
    <ul>
      <li
        className="collection-item basket__delete"
        style={{ background: "#ff9900" }}
      >
        {name} => [{quanity}] *{price} ={price * quanity}$
        <span>
          <i
            className="material-icons incdicicons"
            onClick={() => Dicrement(id)}
          >
            navigate_before
          </i>
          <i
            className="material-icons incdicicons"
            onClick={() => Increment(id)}
          >
            navigate_next
          </i>
          <i
            className="material-icons delete"
            onClick={() => removefromBasket(id)}
          >
            delete
          </i>
        </span>
      </li>
    </ul>
  );
}
