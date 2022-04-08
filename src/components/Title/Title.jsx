import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionTitle } from './Title.style';

const Title = ({ route, title }) => {
  return (
    <CollectionTitle>
      <Link to={`${route}`}>{title}</Link>
    </CollectionTitle>
  );
};

export default Title;
