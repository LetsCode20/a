import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Bs from 'react-icons/bs';
import {
  cartItems,
  getTotalAmount,
  totalAmount,
} from '../../redux/features/checkout/checkoutSlice';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  CheckoutFooterContainer,
  CheckoutFooterBlockContainer,
  CheckoutFooterButtonContainer,
  CheckoutFooterLink,
  CheckoutMessageBlockContainer,
} from './Checkout.style';
import CheckoutItems from '../../components/CheckoutItems/CheckoutItems';
import { SHOPROUTE } from '../../navigation/CONSTANT';
import StripeButton from '../../components/StripeButton/StripeButton';

const Cart = () => {
  const cartItem = useSelector(cartItems);
  const totalAmounts = useSelector(totalAmount);
  const priceForStripe = totalAmounts.toFixed(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cartItem, dispatch]);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {cartItem.map(({ id, image, title, price, quantity }) => (
        <CheckoutItems
          key={id}
          id={id}
          imageUrl={image}
          title={title}
          quantity={quantity}
          price={price}
        />
      ))}

      <CheckoutFooterContainer>
        <CheckoutFooterBlockContainer>
          <h4>Subtotal</h4>
          <span>${priceForStripe}</span>
        </CheckoutFooterBlockContainer>

        <CheckoutFooterBlockContainer>
          <p>Taxes and shipping calculated at checkout</p>
        </CheckoutFooterBlockContainer>

        <CheckoutFooterButtonContainer>
          <StripeButton totalAmounts={priceForStripe} />
        </CheckoutFooterButtonContainer>

        <CheckoutFooterBlockContainer>
          <CheckoutFooterLink to={SHOPROUTE}>
            <Bs.BsArrowLeftShort />
            <span>continue shopping</span>
          </CheckoutFooterLink>
        </CheckoutFooterBlockContainer>

        <CheckoutMessageBlockContainer>
          <p>*Please use the following test credit card for payments*</p>
          <p>4242 4242 4242 4242 - Exp: 04/22 - CVV: 123</p>
        </CheckoutMessageBlockContainer>
      </CheckoutFooterContainer>
    </CheckoutPageContainer>
  );
};

export default Cart;
