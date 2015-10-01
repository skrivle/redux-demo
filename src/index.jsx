import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import Page from './components/Page';
import {cart} from './reducers/cart';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(cart, window.INITIAL_STATE);

let rootElement = document.getElementById('root');

React.render(
  <Provider store={store}>
    {() => <Page />}
  </Provider>,
  rootElement
);
