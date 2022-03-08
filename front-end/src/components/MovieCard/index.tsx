import {
  Button,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Score } from './Score';

export const MovieCard = () => {
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
        src='https://tm.ibxk.com.br/2021/12/02/02070127889006.jpg?ims=1120x420'
        alt='Title movi'
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
        Jhon Wick
      </Heading>

      <Score />

      <Button
        colorScheme='blue'
        fontWeight='normal'
        w='180px'
        h='8'
      >
        Avaliar
      </Button>
    </Flex>
  );
};
