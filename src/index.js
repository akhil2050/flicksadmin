import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextAuthProvider } from "./context/ContextAuth/ContextAuth";
import { MovContextProvider } from "./context/movContext/MovContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAuthProvider>
      <MovContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovContextProvider>
    </ContextAuthProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
