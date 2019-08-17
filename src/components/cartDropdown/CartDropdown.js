import React from "react";
import "./CartDropdown.scss";

import Button from "../button/Button";

const CartDropdown = () => (
  <div className="cart_dropdown">
    <div className="cart_items">
      <Button>Go to checkout</Button>
    </div>
  </div>
);

export default CartDropdown;
