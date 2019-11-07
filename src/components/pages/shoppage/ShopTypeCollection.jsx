import React from "react";
import ShopItem from "./ShopItem";

const ShopTypeCollection = props => {
  const { title, items } = props.collection;
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items
          .filter((val, id) => id < 6)
          .map(item => (
            <ShopItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default ShopTypeCollection;