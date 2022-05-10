import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api-movies';

export default function ReviewsView() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const results = await API.getMovieReviews(movieId);
      setReviews(results);
    };
    getData();
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}
      {reviews?.length === 0 && <p>We don't have any reviews for the movie</p>}
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(el => {
            return (
              <li key={el.id}>
                <h3>{el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
