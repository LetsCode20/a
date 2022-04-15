import React from 'react';
import * as Io from 'react-icons/io';
import * as Ai from 'react-icons/ai';
import {
  CheckoutItemcontainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItems.style';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  decreaseCart,
  addToCart,
} from '../../redux/features/checkout/checkoutSlice';

const CheckoutItems = ({ id, imageUrl, title, quantity, price }) => {
  const product = { id, imageUrl, title, quantity, price };
  const priceTotal = price * quantity;
  const priceTotalFixed = priceTotal.toFixed(2);
  const dispatch = useDispatch();

  const handleDecreaseCart = () => {
    dispatch(decreaseCart(product));
  };

  const handleIncreaseCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <CheckoutItemcontainer>
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      <TextContainer>{title}</TextContainer>
      <QuantityContainer>
        <div onClick={handleDecreaseCart}>
          <Io.IoIosArrowBack />
        </div>
        <span>{quantity}</span>
        <div onClick={handleIncreaseCart}>
          <Io.IoIosArrowForward />
        </div>
      </QuantityContainer>
      <TextContainer>${priceTotalFixed}</TextContainer>
      <RemoveButtonContainer onClick={() => handleRemove()}>
        <Ai.AiOutlineClose />
      </RemoveButtonContainer>
    </CheckoutItemcontainer>
  );
};

export default CheckoutItems;
