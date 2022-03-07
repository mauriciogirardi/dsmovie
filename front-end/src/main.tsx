import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { dark } from './styles/theme/dark';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={dark}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
