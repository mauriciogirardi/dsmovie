import {
  Button,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/MovieProps';
import { Score } from './Score';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Flex
      flexDir='column'
      align='center'
      bg='gray.800'
      justify='space-between'
      h='349px'
      w={['260px']}
      borderRadius='10px'
      pb='5'
    >
      <Image
        src={movie.image}
        alt={movie.title}
        w='260px'
        objectFit='cover'
        height='147px'
        borderRadius='10px 10px 0 0'
      />
      <Heading
        fontWeight='medium'
        size='sm'
        px='2'
        color='gray.200'
        textAlign='center'
        mt='1'
      >
        {movie.title}
      </Heading>

      <Score score={movie.score} count={movie.count} />

      <Link to={`/form/${movie.id}`}>
        <Button
          colorScheme='blue'
          fontWeight='normal'
          w='180px'
          h='8'
        >
          Avaliar
        </Button>
      </Link>
    </Flex>
  );
};
