import React from 'react';
import CatsItem from '../components/CatsItem';
import LoadingBlock from '../components/LoadingBlock';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToFavorite } from '../redux/slices/catImages';

const AllCats: React.FC = (): JSX.Element => {
  const { cats, loading } = useAppSelector((state) => state.cats);
  const dispatch = useAppDispatch();

  return (
    <div className='all__cats'>
      {loading ? (
        <LoadingBlock />
      ) : (
        cats.map((cat) => (
          <CatsItem
            liked={cat.liked}
            key={cat.id}
            url={cat.url}
            onClick={() => dispatch(addToFavorite(cat.id))}
          />
        ))
      )}
    </div>
  );
};

export default AllCats;
