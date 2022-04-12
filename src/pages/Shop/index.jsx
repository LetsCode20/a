import React from 'react';
import { useSelector } from 'react-redux';
import { collections } from '../../redux/features/shop/shopSlice';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const Shop = () => {
  const dataCollections = useSelector(collections);

  return (
    <div>
      {dataCollections.map((collection) =>
        Object.keys(collection).map((key) => {
          const { id, title, items } = collection[key];
          const filterItems = items.filter((_, idx) => idx < 4);
          return (
            <CollectionPreview key={id} title={title} items={filterItems} />
          );
        })
      )}
    </div>
  );
};

export default Shop;
