import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cartSelectors";
import StripeButton from "../../components/stripeButton/StripeButton";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout_page">
    <div className="checkout_header">
      <div className="header_block">
        <span>Product</span>
      </div>
      <div className="header_block">
        <span>Description</span>
      </div>
      <div className="header_block">
        <span>Quantity</span>
      </div>
      <div className="header_block">
        <span>Price</span>
      </div>
      <div className="header_block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">Total: ${total}</div>
    <div className="test_warning">
      *Please use following test credit card for payment
      <br />
      4242 4242 4242 4242 - Exp: 01/20 -CVC 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
