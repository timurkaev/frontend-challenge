import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={1317}
      height={760}
      viewBox='0 0 1317 760'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect rx='0' ry='0' width='225' height='225' />
      <rect x='273' rx='0' ry='0' width='225' height='225' />
      <rect x='546' rx='0' ry='0' width='225' height='225' />
      <rect x='819' rx='0' ry='0' width='225' height='225' />
      <rect x='1092' rx='0' ry='0' width='225' height='225' />

      <rect y='273' rx='0' ry='0' width='225' height='225' />
      <rect x='273' y='273' rx='0' ry='0' width='225' height='225' />
      <rect x='546' y='273' rx='0' ry='0' width='225' height='225' />
      <rect x='819' y='273' rx='0' ry='0' width='225' height='225' />
      <rect x='1092' y='273' rx='0' ry='0' width='225' height='225' />

      <rect y='546' rx='0' ry='0' width='225' height='225' />
      <rect x='273' y='546' rx='0' ry='0' width='225' height='225' />
      <rect x='546' y='546' rx='0' ry='0' width='225' height='225' />
      <rect x='819' y='546' rx='0' ry='0' width='225' height='225' />
      <rect x='1092' y='546' rx='0' ry='0' width='225' height='225' />
    </ContentLoader>
  );
};

export default LoadingBlock;
