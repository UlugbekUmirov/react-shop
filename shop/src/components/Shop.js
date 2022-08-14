import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import Card from "./Card";
import GoodsList from "./GoodsList";
import Loader from "./Loader";
import BasketList from "./BasketList";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [basketshow, setBasketshow] = useState(false);

  const Increment = (item) => {
    const newOrder = order.map((el) => {
      if (el.id === item) {
        return {
          ...el,
          quanity: el.quanity + 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const Dicrement = (item) => {
    const newOrder = order.map((el) => {
      if (el.id === item) {
        return {
          ...el,
          quanity: el.quanity > 0 ? el.quanity - 1 : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const removefromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
  };
  const handleBasketshow = () => {
    setBasketshow(!basketshow);
  };
  const addtoBasket = (item) => {
    const itemindex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemindex < 0) {
      const newItem = {
        ...item,
        quanity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemindex) {
          return {
            ...orderItem,
            quanity: orderItem.quanity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" container content  ">
      <Card quanity={order.length} handleBasketshow={handleBasketshow} />
      {loading ? (
        <Loader />
      ) : (
        <GoodsList goods={goods} addtoBasket={addtoBasket} />
      )}
      {basketshow && (
        <BasketList
          order={order}
          handleBasketshow={handleBasketshow}
          removefromBasket={removefromBasket}
          Increment={Increment}
          Dicrement={Dicrement}
        />
      )}
    </div>
  );
}
