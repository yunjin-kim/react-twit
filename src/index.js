import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebaseApp from './firebase';

console.log(firebaseApp)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);