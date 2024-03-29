import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart_item">
    <img src={imageUrl} alt="item" />
    <div className="item_details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
