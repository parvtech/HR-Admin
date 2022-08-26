import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
//fonts
import "./fonts/CircularStd-Medium.otf"
import "./fonts/CircularStd-Black.otf"
import "./fonts/CircularStd-Book.otf"
import "./fonts/CircularStd-Bold.otf"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
