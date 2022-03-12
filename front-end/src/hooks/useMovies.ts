import { useCallback, useState } from 'react';
import { MovieService } from '../services/api/MovieService';
import { MoviePage } from '../types/MovieProps';
import { Query } from '../types/QueryProps';

export const useMovies = () => {
  const [movies, setMovies] = useState<MoviePage>();
  const [fetching, setFetching] = useState(false);

  const fetchMovies = useCallback(async (query: Query) => {
    try {
      setFetching(true);
      await MovieService.getAllMovies(query).then(
        setMovies,
      );
    } catch (err) {
      console.error(err);
    } finally {
      setFetching(false);
    }
  }, []);

  return {
    movies,
    fetchMovies,
    fetching,
  };
};
