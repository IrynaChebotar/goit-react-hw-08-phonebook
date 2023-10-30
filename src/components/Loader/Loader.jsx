import React from 'react';
import { LoaderWrapper } from './Loader.styled';
import { RingLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RingLoader color="#4fa94d" loading={true} />
    </LoaderWrapper>
  );
};
