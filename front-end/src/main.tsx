import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { dark } from './styles/theme/dark';
import App from './App';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={dark}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
