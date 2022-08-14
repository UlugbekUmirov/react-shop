import React, { useEffect, useState } from "react";

export default function GoodsItem(props) {
  const { id, name, description, price, full_background, addtoBasket } = props;
  const [url, setUrl] = useState(full_background);

  useEffect(() => {
    fetch(full_background)
      .then((data) => {
        if (data.status === 200) {
          return setUrl(full_background);
        }
      })
      .catch((err) => {
        return setUrl(
          "https://cdn2.iconfinder.com/data/icons/web-interface-icons//66/Img-512.png"
        );
      });
  }, []);

  return (
    <>
      <div className="card" id={id}>
        <div className="card_image">
          <div className="card-image">
            <img src={url} alt={name} />
          </div>
        </div>
        <div className="card-context">
          <p className="card-title">{name}</p>
          <p>{description}</p>
        </div>
        <div className="card-action ">
          <button
            onclick="M.toast({html: 'I am a toast'})"
            className="btn"
            style={{
              background: "#ffa31a",
              borderRadius: "7px",
              color: "black",
              fontWeight: "700",
              fontSize: "xx-middle",
            }}
            onClick={() => addtoBasket({ id, name, price })}
          >
            Buy
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {price}$
          </span>{" "}
        </div>
      </div>
    </>
  );
}
