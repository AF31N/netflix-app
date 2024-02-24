import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './Store/Contex';
import firebaseApp from './Firebase/Config';
import Context from './Store/Contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
    <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Context>
  </FirebaseContext.Provider>
);

reportWebVitals();

