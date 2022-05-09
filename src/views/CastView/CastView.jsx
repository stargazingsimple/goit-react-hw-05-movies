import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlockMovie } from 'views/MovieDetailsView/MoveDetails.styled';
import * as API from '../../services/api-movies';
import { ListItem } from '../HomeView/HomeView.styled';

export default function CastView() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const results = await API.getMovieCredits(movieId);
      setCast(results);
    };
    getData();
  }, [movieId]);

  return (
    <>
      {!cast.length > 0 && <p>We don't have any casters info for the movie</p>}
      {cast.length > 0 && (
        <BlockMovie>
          <ul>
            {cast.map(el => {
              return (
                <ListItem key={el.id}>
                  {el.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                      alt={cast.original_name}
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                      alt="Unknown"
                      width={200}
                      height={300}
                    />
                  )}
                  <p>{el.original_name}</p>
                  <p>Character: {el.character}</p>
                </ListItem>
              );
            })}
          </ul>
        </BlockMovie>
      )}
    </>
  );
}
