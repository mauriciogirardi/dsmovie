import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Skeleton,
  Stack,
} from '@chakra-ui/react';

export const SkeletonMovieForm = () => {
  return (
    <Flex flexDir='column'>
      <Box>
        <Skeleton
          w='100%'
          height='300px'
          borderRadius='10px 10px 0 0'
        />
        <Skeleton mt='2' h='36px' w='420px' />
      </Box>

      <Divider my='8' />

      <Stack as='form' spacing={10}>
        <FormControl>
          <FormLabel fontSize='15' color='gray.400'>
            Informe sua email
          </FormLabel>
          <Skeleton w='100%' h='40px' />
        </FormControl>

        <Box>
          <Skeleton h='45px' w='120px' />
        </Box>

        <Flex justify='flex-end' gap={5}>
          <Skeleton h='35px' w='100px' />
          <Skeleton h='35px' w='100px' />
        </Flex>
      </Stack>
    </Flex>
  );
};
