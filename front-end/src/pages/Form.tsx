import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { useNavigate, useParams } from 'react-router-dom';
import { useFindMovie } from '../hooks/useFindMovie';
import { SkeletonMovieForm } from '../components/SkeleronMovieForm';
import { Score } from '../types/MovieForm';
import { isEmail } from '../utils/isEmail';
import { MovieService } from '../services/api/MovieService';
import { useUpdateScore } from '../hooks/useUpdateScore';

export default function Form() {
  const { fetchMovie, fetching, movie } = useFindMovie();
  const { fetchScore, fetching: fetchingScore } =
    useUpdateScore();
  const navigate = useNavigate();
  const toast = useToast();
  const { movieId } = useParams<{ movieId: string }>();

  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isNaN(Number(movieId)))
      fetchMovie(Number(movieId));
  }, [fetchMovie, movieId]);

  if (isNaN(Number(movieId))) {
    return (
      <h1>{`O filme com o Id ${movieId} não foi encontrado!`}</h1>
    );
  }

  const handleSubmit = async () => {
    try {
      const data: Score = {
        movieId: Number(movieId),
        score: rating,
        email,
      };

      if (!isEmail(email)) {
        return toast({
          title: 'E-mail',
          description:
            'E-mail invalido, insira um email válido!',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      await fetchScore(data);

      toast({
        title: 'Avaliação',
        description: `O filme foi avaliado com sucesso!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });

      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      {fetching ? (
        <SkeletonMovieForm />
      ) : (
        <Flex flexDir='column'>
          <Box>
            <Image
              src={movie?.image}
              alt={movie?.title}
              w='100%'
              objectFit='cover'
              height='300px'
              borderRadius='10px 10px 0 0'
            />
            <Heading fontWeight='thin' size='lg' mt='2'>
              {movie?.title}
            </Heading>
          </Box>

          <Divider my='8' />

          <Stack spacing={10}>
            <FormControl isRequired>
              <FormLabel
                htmlFor='email'
                fontSize='15'
                color='gray.400'
              >
                Informe sua email
              </FormLabel>
              <Input
                type='email'
                id='email'
                color='gray.100'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize='15'
                color='gray.400'
                mb='-1'
              >
                Informe sua avaliação
              </FormLabel>

              <StarRatingComponent
                name='rate'
                starCount={5}
                value={rating}
                onStarClick={(nextValue) =>
                  setRating(nextValue)
                }
              />
            </FormControl>

            <Flex justify='flex-end' gap={5}>
              <Button
                variant='outline'
                colorScheme='blue'
                onClick={() => navigate('/')}
              >
                Cancelar
              </Button>
              <Button
                colorScheme='pink'
                onClick={handleSubmit}
                isLoading={fetchingScore}
              >
                Salvar
              </Button>
            </Flex>
          </Stack>
        </Flex>
      )}
    </Container>
  );
}
