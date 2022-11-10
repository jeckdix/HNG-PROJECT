import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring pe rformance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();