import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
 
  <BrowserRouter>
  <React.StrictMode>
    <Suspense fallback={'Conectando la app...'}>
      <App />
    </Suspense>
  </React.StrictMode>
</BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
