// library imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// redux imports
import vehicleApp from "./reducers";

// component imports
import App from "./components/App/App";

// let store = createStore(vehicleApp);
const store = createStore(
  vehicleApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
