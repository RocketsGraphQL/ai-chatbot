import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setup Axios once here
axios.defaults.headers = { Accept: 'application/json' };
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
export default axiosInstance;

// Find all widget divs
const widgetDivs = document.querySelectorAll('.nicoraynaud-finance-widget');

// Inject our React App into each class
widgetDivs.forEach(div => {
  const root = ReactDOM.createRoot(div);
  root.render(
      <React.StrictMode>
        <App symbol={div.dataset.symbol}/>
      </React.StrictMode>,
      div
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();