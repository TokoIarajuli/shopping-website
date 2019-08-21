import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";

import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart_dropdown">
    <div className="cart_items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>Go to checkout</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
