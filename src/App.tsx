import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import AllCats from './pages/AllCats';
import FavoriteCats from './pages/FavoriteCats';
import { useAppDispatch } from './redux/hooks';
import { fetchCats } from './redux/slices/catImages';

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(20);

  React.useEffect(() => {
    dispatch(fetchCats(page));
  }, [page]);

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<AllCats />} />
          <Route path='/favorite' element={<FavoriteCats />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
