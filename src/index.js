import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbve71XJCSf8shw0jNMV_XCRbjSNkI_o",
  authDomain: "react-eccommerce.firebaseapp.com",
  projectId: "react-eccommerce",
  storageBucket: "react-eccommerce.appspot.com",
  messagingSenderId: "202935421451",
  appId: "1:202935421451:web:0b71aeb3dd18307e05d50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
