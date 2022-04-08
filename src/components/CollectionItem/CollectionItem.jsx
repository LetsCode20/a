import React from 'react';
import { useParams } from 'react-router-dom';

const CollectionItem = () => {
    let { collectionId } = useParams();

    return <div>CollectionItem {collectionId}</div>;
};

export default CollectionItem;
