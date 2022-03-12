import { Skeleton } from '@chakra-ui/react';

export const SkeletonMovieList = () => {
  return (
    <>
      {Array(6)
        .fill(null)
        .map((item, i) => (
          <Skeleton
            key={i}
            flexDir='column'
            bg='gray.800'
            h='349px'
            w={['260px']}
            borderRadius='10px'
            pb='5'
          />
        ))}
    </>
  );
};
