import React from 'react';
import CollectionPreviewItems from '../CollectionPreviewItems/CollectionPreviewItems';
import Title from '../Title/Title';
import { CollectionPreviewContainer } from './CollectionPreview.style';

const CollectionPreview = ({ title, collectionItems }) => {
  return (
    <div>
      <Title title={title} />

      <CollectionPreviewContainer>
        {collectionItems.map(({ id, image, title, price }) => (
          <CollectionPreviewItems
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
          />
        ))}
      </CollectionPreviewContainer>
    </div>
  );
};

export default CollectionPreview;
