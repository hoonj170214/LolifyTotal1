import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "intersection-observer";

import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "@modules";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

const middleware = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [middleware],
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
