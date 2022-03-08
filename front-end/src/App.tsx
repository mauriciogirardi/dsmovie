import { MainRoutes } from './routes';
import { Header } from './components/Header';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Header />
      <Container maxW='container.lg' py='6'>
        <MainRoutes />
      </Container>
    </>
  );
}

export default App;
