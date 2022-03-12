import { MainRoutes } from './routes';
import { Header } from './components/Header';
import { Container, Flex } from '@chakra-ui/react';
import { Footer } from './components/Footer';

function App() {
  return (
    <Flex flexDir='column' w='100%' h='100vh'>
      <Header />
      <Container
        maxW='container.lg'
        py='6'
        as='main'
        flex='1'
      >
        <MainRoutes />
      </Container>
      <Footer />
    </Flex>
  );
}

export default App;
