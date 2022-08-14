export default function Card(props) {
  const { quanity = 0, handleBasketshow = Function.prototype } = props;

  return (
    <div className="cart" onClick={handleBasketshow}>
      <i className="material-icons">local_grocery_store</i>
      {quanity ? <span className="card-quanity">{quanity}</span> : null}
    </div>
  );
}
