import { Service } from './service';

import { Movie, MoviePage } from '../../types/MovieProps';
import { generateQueryString } from '../utils/generateQueryString';
import { Query } from '../../types/QueryProps';
import { Score } from '../../types/MovieForm';

export class MovieService extends Service {
  static getAllMovies(search: Query) {
    const queryString = generateQueryString(search);

    return this.Http.get<MoviePage>(
      '/movies'.concat(queryString),
    ).then(this.getData);
  }

  static getMovie(idMovie: number) {
    return this.Http.get<Movie>(`/movies/${idMovie}`).then(
      this.getData,
    );
  }

  static putAviationMovie(score: Score) {
    return this.Http.put<Score>(`/scores`, score);
  }
}
