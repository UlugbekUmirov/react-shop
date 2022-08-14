import GoodsItem from "./GoodsItem";
export default function GoodsList(props) {
  const { goods = [], addtoBasket } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addtoBasket={addtoBasket} />
      ))}
    </div>
  );
}
