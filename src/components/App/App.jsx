import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';

import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('../Layout/Layout'));
const HomeView = lazy(() => import('views/HomeView/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('views/MovieDetailsView/MovieDetailsView')
);
const CastView = lazy(() => import('views/CastView/CastView'));
const ReviewsView = lazy(() => import('views/ReviewsView/ReviewsView'));
const PageNotFoundView = lazy(() =>
  import('views/PageNotFoundView/PageNotFoundView')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<MoviesView />} />
            <Route path="movies/:movieId" element={<MovieDetailsView />}>
              <Route
                path="cast"
                element={
                  <Suspense fallback={<></>}>
                    <CastView />
                  </Suspense>
                }
              />
              <Route
                path="reviews"
                element={
                  <Suspense fallback={<></>}>
                    <ReviewsView />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFoundView />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
