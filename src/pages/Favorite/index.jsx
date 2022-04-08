import React from 'react';

const Favorite = () => {
  const favorite = [];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Favorite</h2>

      {!favorite.length && (
        <div>
          <p>No Favorite Items :(</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
