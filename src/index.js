import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/jsdom';

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Main from './pub';
import * as serviceWorker from './serviceWorker';

import Reset from './styled/Reset';

//import './css/index.scss';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
