import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Page from './components/Page';
import {cart} from './reducers/cart';

const store = createStore(cart, window.INITIAL_STATE);

let rootElement = document.getElementById('root');

React.render(
  <Provider store={store}>
    {() => <Page />}
  </Provider>,
  rootElement
);
