import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
// separate components for:
// * info (photo, name, buttons)
// * about
// * interests
// * footer (social icons)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
