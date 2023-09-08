import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
function setVh() {
  rootEl.style.setProperty('--vh', `${window.innerHeight + 1}px`);
}
window.addEventListener('resize', setVh);
setVh();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

