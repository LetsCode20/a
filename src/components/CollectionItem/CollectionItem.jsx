import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { collections } from '../../redux/features/shop/shopSlice';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionItem = () => {
  let { collectionId } = useParams();
  const dataCollections = useSelector(collections);

  return (
    <div>
      {dataCollections.map((collection) =>
        Object.keys(collection)
          .filter((key) => collection[key].routName === collectionId)
          .map((key) => {
            const { id, title, items } = collection[key];

            return (
              <CollectionPreview
                key={id}
                title={title}
                collectionItems={items}
              />
            );
          })
      )}
    </div>
  );
};

export default CollectionItem;
