import {
  Box,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box bg='gray.800'>
      <Container maxW='container.lg' h='200px'>
        <Flex
          h='100%'
          w='100%'
          as='footer'
          align='center'
          justify='center'
          flexDir='column'
          gap='3'
        >
          <Text fontWeight='medium' color='gray.500'>
            Semana Spring React
          </Text>
          <a
            href='https://www.linkedin.com/in/mauricio-girardi/'
            target='_blank'
          >
            <Flex
              gap='2'
              color='pink.500'
              _hover={{ color: 'pink.600' }}
              transition='.25s'
            >
              <FaLinkedin />
              <Text fontWeight='light' fontSize='12px'>
                Mauricio Girardi
              </Text>
            </Flex>
          </a>
        </Flex>
      </Container>
    </Box>
  );
};
