import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import getStorage from './storage.js'

window.storage = getStorage();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
