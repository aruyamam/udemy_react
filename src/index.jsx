import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/App';
import SearchPage from './containers/SearchPage';
import reducer from './reducers/';

import './stylesheets/index.scss';

ReactDOM.render(
  <SearchPage history={history} location={location} store={createStore(reducer)} />,
  document.querySelector('.container'),
);
