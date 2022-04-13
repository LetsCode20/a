import React from 'react';
import { cartItems } from '../../redux/features/cart/cartSlice';
import { useSelector } from 'react-redux';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
} from './cart.style';
import CheckoutItems from '../../components/CheckoutItems/CheckoutItems';

const Cart = () => {
  const cartItem = useSelector(cartItems);

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
          imageUrl={image}
          title={title}
          quantity={quantity}
          price={price}
        />
      ))}
    </CheckoutPageContainer>
  );
};

export default Cart;
