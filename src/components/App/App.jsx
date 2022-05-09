import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';
import HomeView from 'views/HomeView/HomeView';
import MoviesView from 'views/MoviesView/MoviesView';
import MovieDetailsView from 'views/MovieDetailsView/MovieDetailsView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
        {/* <Route path="*" element={<PageNotFoundView />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};
