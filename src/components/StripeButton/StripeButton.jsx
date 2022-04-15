import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ totalAmounts }) => {
  const [, setStripeToken] = useState(null);

  const KEY =
    'pk_test_51KovHjJ8rN51MVQcrgD91C5dTexJXe4Ss4xX92oBm64kVf3nw4G9mRJgP5c6zmoxgT9FSY03K4StmKxwDcKtxacm00kywk0ZUa';

  const onToken = (token) => {
    setStripeToken(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='My Store'
      billingAddress
      shippingAddress
      description={`Your Total is $${totalAmounts}`}
      amount={totalAmounts * 100}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={KEY}
    >
      <button>Checkout</button>
    </StripeCheckout>
  );
};

export default StripeButton;
