import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WsPPMk6sEBYfOcXaGXug0Jum00Q1gOzuQY";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("payment was successful");
      })
      .catch(error => {
        console.log("payment error", error);
        alert("there was an issue with payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="MAv CLothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
