import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import store from "./redux";
import { fetchAuthors } from "./redux/actions";

store.dispatch(fetchAuthors());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
