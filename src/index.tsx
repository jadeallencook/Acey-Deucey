import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import FIREBASE_CONFIG from './constants/firebase-config';

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
