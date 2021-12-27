import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux"
import { createStore, applyMiddleware,compose } from "redux"
import reducer from './reducer';
import thunk from 'redux-thunk';


import {setCurrentUser} from "./action";
import jwt from 'jsonwebtoken';




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


if(localStorage.getItem('token')){
  store.dispatch(setCurrentUser(jwt.decode(localStorage.getItem('token'))))
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
