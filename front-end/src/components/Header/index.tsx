import { Box, Container, Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { GithubLink } from './GithubLink';

export const Header = () => {
  return (
    <Box bg='gray.800'>
      <Container maxW='container.lg' py='6'>
        <Flex
          as='header'
          align='center'
          justify='space-between'
        >
          <Logo />
          <GithubLink />
        </Flex>
      </Container>
    </Box>
  );
};
