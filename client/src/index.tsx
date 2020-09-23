import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/theme/theme';

import { ApolloProvider } from '@apollo/client';
import client from './apollo';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
