import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShopBag } from "../../assets/shopBag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart_icon" onClick={toggleCartHidden}>
    <ShopBag className="shop_icon" />
    <span className="item_count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumualtedQuantity, cartItem) => accumualtedQuantity + cartItem.quantity,
    0
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
