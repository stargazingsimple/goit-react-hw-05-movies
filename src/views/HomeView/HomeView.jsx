import Loader from 'components/Loader/Loader';
import PageHeader from 'components/PageHeader/PageHeader';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../../services/api-movies';
import { ListItem } from './HomeView.styled';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const results = await API.getTrendingMovies();
      setMovies(results);
    };
    getData();
  }, []);

  return (
    <>
      <PageHeader text="Trending today" />
      {!movies && <Loader />}
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title ?? movie.name}
                </Link>
              </ListItem>
            );
          })}
        </ul>
      )}
    </>
  );
}
