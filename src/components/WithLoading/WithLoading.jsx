import React from 'react';
import { useSelector } from 'react-redux';
import { statusCollections } from '../../features/shop/shopSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const WithLoading = (WrappedComponent) => {
  const status = useSelector(statusCollections);

  return status === 'loading' ? <LoadingSpinner /> : <WrappedComponent />;
};

export default WithLoading;
