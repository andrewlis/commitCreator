import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import { createStore } from 'redux';
import commitsList from './reducers';

if(localStorage.getItem('state')){
  const initialState = JSON.parse(localStorage.getItem('state'));
  const store = createStore(commitsList, initialState);

  ReactDOM.render(
  <App 
    store={store}
  />, 
  document.querySelector('#app')
  );
}
else {
  const initialState = {
    commits: [],
    inputName: '', 
    inputText: ''
  };

  const store = createStore(commitsList, initialState);

  ReactDOM.render(
  <App 
    store={store}
  />, 
  document.querySelector('#app')
  );

}
