import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setScreenSize);
setScreenSize();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

