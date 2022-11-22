import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {BrowserRouter as Router} from 'react-router-dom'

import './_base.scss'
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  
  document.getElementById('root')
);


