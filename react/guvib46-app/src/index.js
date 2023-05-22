import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./common/common.css";
import Directory from "./Directory";
import { BrowserRouter } from "react-router-dom";
import Parent from "./Parent";
import FavCar from "./FavCar";
import Counter from "./Counter";
import CounterReduce from "./CounterReduce";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CounterReduce></CounterReduce>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
