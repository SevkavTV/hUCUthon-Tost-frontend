import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Provider/ThemeProvider'

import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from 'react-router-dom'
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCLrKIkop8P-XQFp1k9XWpioQtTHzQpmRc",
  authDomain: "tost-a3df4.firebaseapp.com",
  projectId: "tost-a3df4",
  storageBucket: "tost-a3df4.appspot.com",
  messagingSenderId: "45713388343",
  appId: "1:45713388343:web:a055e0860032b92f47e0b2",
  measurementId: "G-Y32KD0ECYY"
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
