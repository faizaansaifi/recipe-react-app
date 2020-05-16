import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import { logger} from "redux-logger/src";
import { rootReducer } from './reducer'

const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
