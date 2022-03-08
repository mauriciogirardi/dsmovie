import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';

export default function ListMovies() {
  const [page, setPage] = useState(1);
  return (
    <Flex
      flexDir='column'
      h={['100%', '87vh']}
      align='center'
      w='100%'
    >
      <Flex flex={1}>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacingX='40px'
          spacingY='20px'
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </SimpleGrid>
      </Flex>

      <Pagination
        totalCountRegister={5}
        currentPage={2}
        onPageChange={setPage}
      />
    </Flex>
  );
}
