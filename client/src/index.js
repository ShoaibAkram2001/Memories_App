import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import postReducer from './postReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import App from './App';

import {createStore} from 'redux';





import reportWebVitals from './reportWebVitals';
const store=createStore(postReducer,compose(applyMiddleware(thunk)))

//store={store}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store} >
   <App />
   </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
