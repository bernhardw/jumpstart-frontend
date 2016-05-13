import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

import 'normalize.css/normalize.css';
import './assets/fonts/fonts.css';
import './assets/css/styles.css';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
