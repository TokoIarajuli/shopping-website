import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShopBag } from "../../assets/shopBag.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart_icon" onClick={toggleCartHidden}>
    <ShopBag className="shop_icon" />
    <span className="item_count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
