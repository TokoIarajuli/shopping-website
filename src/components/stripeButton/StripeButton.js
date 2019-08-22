import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/logo.svg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_fMnLE6l5X6OMupsVIPJa7FX100BIWJ18QE";
  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      bitcoin
      alipay
      allowRememberMe
      image={Logo}
      label="Pay Now"
      name="Torch webstore Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
