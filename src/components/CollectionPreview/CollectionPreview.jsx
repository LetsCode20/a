import React from 'react';
import CollectionPreviewItems from '../CollectionPreviewItems/CollectionPreviewItems';
import Title from '../Title/Title';
import { CollectionPreviewContainer } from './CollectionPreview.style';

const CollectionPreview = ({ title, route, items }) => {
  return (
    <div>
      <Title route={route} title={title} />

      <CollectionPreviewContainer>
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, image, title, price }) => (
            <CollectionPreviewItems
              key={id}
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
