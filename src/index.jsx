import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import reducer from "./reducers/post-list-reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("react-app-root")
);
