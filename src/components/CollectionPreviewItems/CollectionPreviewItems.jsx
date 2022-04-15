import React from 'react';
import * as Ai from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../redux/features/checkout/checkoutSlice';
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from '../../redux/features/favorite/favoriteSlice';
import {
  CollectionPreviewItemButton,
  CollectionPreviewItemContainer,
  CollectionPreviewItemHearth,
  CollectionPreviewItemImg,
  CollectionPreviewItemInformation,
} from './CollectionPreviewItems.style';

const CollectionPreviewItems = ({ id, image, title, price }) => {
  let { pathname } = useLocation();
  const path = pathname.split('/')[1];
  const dispatch = useDispatch();

  const product = { id, image, title, price };

  const addToFavorite = () => {
    dispatch(addItemToFavorite(product));
  };

  const removeFromFavorite = () => {
    dispatch(removeItemFromFavorite(product));
  };

  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <CollectionPreviewItemContainer>
      <CollectionPreviewItemImg src={image} alt={image} />

      <CollectionPreviewItemInformation>
        <p>{title}</p>
        <span>${price}</span>
      </CollectionPreviewItemInformation>

      <CollectionPreviewItemButton onClick={addItemToCart}>
        <button>Add to Cart</button>
      </CollectionPreviewItemButton>

      {path === 'favorite' ? (
        <CollectionPreviewItemHearth onClick={removeFromFavorite}>
          <Ai.AiOutlineClose style={{ color: 'white' }} />
        </CollectionPreviewItemHearth>
      ) : (
        <CollectionPreviewItemHearth onClick={addToFavorite}>
          <Ai.AiFillHeart />
        </CollectionPreviewItemHearth>
      )}
    </CollectionPreviewItemContainer>
  );
};

export default CollectionPreviewItems;
