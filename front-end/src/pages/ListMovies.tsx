import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Pagination } from '../components/Pagination';

export default function ListMovies() {
  const [page, setPage] = useState(1);
  return (
    <Flex flexDir='column' h='87vh'>
      <Flex flex={1}>
        <h1>List</h1>
      </Flex>

      <Pagination
        totalCountRegister={5}
        currentPage={2}
        onPageChange={setPage}
      />
    </Flex>
  );
}
