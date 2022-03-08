import { Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from '../pages/Form';
import ListMovies from '../pages/ListMovies';

const NotFound = lazy(() => import('../pages/NotFound'));

export const MainRoutes = () => {
  return (
    <Suspense fallback={<Spinner size='xl' />}>
      <Routes>
        <Route path='/' element={<ListMovies />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
