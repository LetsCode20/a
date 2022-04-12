import React from 'react';
import { useSelector } from 'react-redux';
import { CollectionPreviewContainer } from '../../components/CollectionPreview/CollectionPreview.style';
import CollectionPreviewItems from '../../components/CollectionPreviewItems/CollectionPreviewItems';
import { favoriteItems } from '../../redux/features/favorite/favoriteSlice';

const Favorite = () => {
  const favoriteItem = useSelector(favoriteItems);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Favorite</h2>

      {!favoriteItem.length ? (
        <div>
          <p>No Favorite Items :(</p>
        </div>
      ) : (
        <CollectionPreviewContainer>
          {favoriteItem.map(({ id, image, title, price }) => (
            <CollectionPreviewItems
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
            />
          ))}
        </CollectionPreviewContainer>
      )}
    </div>
  );
};

export default Favorite;
