import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';
import { SkeletonMovieList } from '../components/SkeletonMovieList';
import { useMovies } from '../hooks/useMovies';

export default function ListMovies() {
  const [page, setPage] = useState(1);

  const { fetchMovies, movies, fetching } = useMovies();

  useEffect(() => {
    fetchMovies({
      page: page - 1,
      size: 9,
      showAll: true,
      sort: ['title', 'asc'],
    });
  }, [fetchMovies, page]);

  return (
    <Flex
      flexDir='column'
      h={'100%'}
      align='center'
      w='100%'
    >
      <Flex flex={1}>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacingX='40px'
          spacingY='20px'
        >
          {fetching || !movies?.content.length ? (
            <SkeletonMovieList />
          ) : (
            <>
              {movies.content.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
          )}
        </SimpleGrid>
      </Flex>

      <Flex justify='flex-end' w='87%'>
        <Pagination
          // @ts-ignore
          currentPage={movies?.number + 1}
          onPageChange={setPage}
          lastPage={movies?.totalPages || 0}
        />
      </Flex>
    </Flex>
  );
}
