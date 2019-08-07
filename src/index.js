import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/jsdom';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Main from './pub/layout/Layout';
import * as serviceWorker from './serviceWorker';

import Styled from './styled';

ReactDOM.render(
  <Fragment>
    <Styled />
    <Main />
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
