import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const { order, handleBasketshow, removefromBasket, Dicrement, Increment } =
    props;

  const TotalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quanity;
  }, 0);
  return (
    <div className="basket">
      <ul className="collection basket-list">
        <li className="collection-item active  black">Basket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                removefromBasket={removefromBasket}
                Dicrement={Dicrement}
                Increment={Increment}
                key={item.id}
                {...item}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active black">
          Total Price: {TotalPrice}
        </li>
        <i className="material-icons basket-close" onClick={handleBasketshow}>
          close
        </i>
      </ul>
    </div>
  );
}
