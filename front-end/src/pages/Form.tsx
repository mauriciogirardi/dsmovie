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
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Form() {
  const [rating, setRating] = useState(0);
  return (
    <Container>
      <Flex flexDir='column'>
        <Box>
          <Image
            src='https://tm.ibxk.com.br/2021/12/02/02070127889006.jpg?ims=1120x420'
            alt='Title movi'
            w='100%'
            objectFit='cover'
            height='200px'
          />
          <Heading fontWeight='thin' size='lg' mt='2'>
            The Witcher
          </Heading>
        </Box>

        <Divider my='8' />

        <Stack as='form' spacing={10}>
          <FormControl>
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
            />
          </FormControl>

          <Box>
            <Text fontSize='15' color='gray.400' mb='-3'>
              Informe sua avaliação
            </Text>

            <StarRatingComponent
              name='rate'
              starCount={5}
              value={rating}
              onStarClick={(nextValue) =>
                setRating(nextValue)
              }
            />
          </Box>

          <Flex justify='flex-end' gap={5}>
            <Button variant='outline' colorScheme='blue'>
              Cancelar
            </Button>
            <Button colorScheme='pink'>Salvar</Button>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}
