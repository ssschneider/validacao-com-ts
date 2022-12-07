import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from "./global"

const rootElement = document.getElementById("root")

const root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    < GlobalStyle />
    <App />
  </React.StrictMode>
);
