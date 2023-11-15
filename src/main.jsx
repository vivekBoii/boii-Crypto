import App from './App.jsx';
import './index.css';
import * as React from 'react';
import { ChakraProvider , ColorModeScript ,extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';


const theme = extendTheme({
  fonts: {
    body:'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)