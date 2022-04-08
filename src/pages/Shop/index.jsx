import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  collections,
  getCollections,
  // statusCollections,
} from '../../features/shop/shopSlice';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
// import WithLoading from '../../components/WithLoading/WithLoading';

const Shop = () => {
  const dispatch = useDispatch();
  const dataCollections = useSelector(collections);
  // const status = useSelector(statusCollections);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <div>
      {dataCollections.map((collection) =>
        Object.keys(collection).map((key) => {
          const { id, title, routName, items } = collection[key];

          return (
            <CollectionPreview
              key={id}
              title={title}
              route={routName}
              items={items}
            />
          );
        })
      )}
    </div>
  );
};

export default Shop;
