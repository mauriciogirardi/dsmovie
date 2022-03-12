import { useCallback, useState } from 'react';
import { MovieService } from '../services/api/MovieService';
import { Score } from '../types/MovieForm';

export const useUpdateScore = () => {
  const [fetching, setFetching] = useState(false);

  const fetchScore = useCallback(async (score: Score) => {
    try {
      setFetching(true);
      await MovieService.putAviationMovie(score);
    } catch (err) {
      console.error(err);
    } finally {
      setFetching(false);
    }
  }, []);

  return {
    fetchScore,
    fetching,
  };
};
