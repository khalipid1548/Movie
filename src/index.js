// import rootReducer from "./reducers";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
// import {createStore, applyMiddleware, compose} from "redux";
// import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./App";
import store from "./reducers/kit";
import reportWebVitals from "./reportWebVitals";

// const enhanced = compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const store = createStore(rootReducer, enhanced);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
