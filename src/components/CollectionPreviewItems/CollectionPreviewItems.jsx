import React from 'react';
import * as Ai from 'react-icons/ai';
import {
  CollectionPreviewItemButton,
  CollectionPreviewItemContainer,
  CollectionPreviewItemHearth,
  CollectionPreviewItemImg,
  CollectionPreviewItemInformation,
} from './CollectionPreviewItems.style';

const CollectionPreviewItems = ({ id, image, title, price }) => {
  return (
    <CollectionPreviewItemContainer>
      <CollectionPreviewItemImg src={image} alt={image} />

      <CollectionPreviewItemInformation>
        <p>{title}</p>
        <span>${price}</span>
      </CollectionPreviewItemInformation>

      <CollectionPreviewItemButton>
        <button>Add to Cart</button>
      </CollectionPreviewItemButton>

      <CollectionPreviewItemHearth>
        <Ai.AiFillHeart />
      </CollectionPreviewItemHearth>
    </CollectionPreviewItemContainer>
  );
};

export default CollectionPreviewItems;
