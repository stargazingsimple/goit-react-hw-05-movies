import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import * as API from '../../services/api-movies';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const results = await API.getMovieDetails(movieId);
      if (!results) {
        setMovie(location.state.obj);
      } else {
        setMovie(results);
      }
    };
    getData();
  }, [movieId, location.state.obj]);

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from?.pathname ?? '/movies')}
      >
        Go Back
      </button>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.original_title ?? movie.original_name}
          />
          <div>
            <h1>{movie.title ?? movie.name}</h1>
            {/* <p></p>
            <h2></h2>
            <p></p>
            <h3></h3>
            <p></p> */}
          </div>
        </div>
      )}
    </>
  );
}
