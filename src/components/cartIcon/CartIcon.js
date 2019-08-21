import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
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

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
