import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CatsItem from '../components/CatsItem';
import { removeFromFavorite } from '../redux/slices/catImages';
import LoadingBlock from '../components/LoadingBlock';

const FavoriteCats: React.FC = (): JSX.Element => {
  const { loading, favorites } = useAppSelector((state) => state.cats);
  const dispatch = useAppDispatch();

  console.log(favorites);

  return (
    <div className='all__cats'>
      {loading ? (
        <LoadingBlock />
      ) : (
        favorites.map((favorite) => (
          <CatsItem
            key={favorite.id}
            url={favorite.url}
            liked={favorite.liked}
            onClick={() => dispatch(removeFromFavorite(favorite.id))}
          />
        ))
      )}
    </div>
  );
};

export default FavoriteCats;
