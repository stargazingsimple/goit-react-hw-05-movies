import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import * as API from '../../services/api-movies';
import { getGenres } from 'services/genres';
import { AdditionalInfo, BlockMovie, MovieInfo } from './MoveDetails.styled';
import { ListItem } from 'views/HomeView/HomeView.styled';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const results = await API.getMovieDetails(movieId);
      setMovie(results);
    };
    getData();
  }, [movieId]);

  const goBack = () => {
    if (
      location.pathname.includes('cast') ||
      location.pathname.includes('reviews') ||
      location?.state?.from?.search
    ) {
      return navigate(
        location.state.from.pathname + location.state.from.search
      );
    }
    navigate('/');
  };

  return (
    <>
      <button type="button" onClick={() => goBack()}>
        Go Back
      </button>
      {!movie && <Loader />}
      {movie && (
        <>
          <BlockMovie>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                alt="Unknown"
              />
            )}
            <MovieInfo>
              <h1>
                {movie.title} ({movie?.release_date?.split('-')[0]})
              </h1>
              <p>User score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{getGenres(movieId)}</p>
            </MovieInfo>
          </BlockMovie>
          <p>Additional information</p>
          <AdditionalInfo>
            <ListItem>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="reviews" state={location.state}>
                Reviews
              </NavLink>
            </ListItem>
          </AdditionalInfo>
          <Outlet />
        </>
      )}
    </>
  );
}
