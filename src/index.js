import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyles';

import store from "./redux/store";
import { Provider } from "react-redux";

import router from './modules/routes/routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);