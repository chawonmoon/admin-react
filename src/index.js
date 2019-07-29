import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/jsdom';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Main from './pub';
import * as serviceWorker from './serviceWorker';

import Reset from './styled/Reset';
const GlobalStyle = new Reset().init();

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
