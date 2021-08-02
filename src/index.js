import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


