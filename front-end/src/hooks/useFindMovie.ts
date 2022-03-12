import { useCallback, useState } from 'react';
import { MovieService } from '../services/api/MovieService';
import { Movie } from '../types/MovieProps';

export const useFindMovie = () => {
  const [movie, setMovie] = useState<Movie>();
  const [fetching, setFetching] = useState(false);

  const fetchMovie = useCallback(
    async (movieId: number) => {
      try {
        setFetching(true);
        await MovieService.getMovie(movieId).then(setMovie);
      } catch (err) {
        console.error(err);
      } finally {
        setFetching(false);
      }
    },
    [],
  );

  return {
    movie,
    fetchMovie,
    fetching,
  };
};
