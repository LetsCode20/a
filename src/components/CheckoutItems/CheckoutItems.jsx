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

const CheckoutItems = ({ id, imageUrl, title, quantity, price }) => {
  return (
    <CheckoutItemcontainer id={id}>
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      <TextContainer>{title}</TextContainer>
      <QuantityContainer>
        <div>
          <Io.IoIosArrowBack />
        </div>
        <span>{quantity}</span>
        <div>
          <Io.IoIosArrowForward />
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer>
        <Ai.AiOutlineClose />
      </RemoveButtonContainer>
    </CheckoutItemcontainer>
  );
};

export default CheckoutItems;
