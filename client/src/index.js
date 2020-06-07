import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from 'redux-thunk';// without thunk always says, actions must plain objects;
import reducers from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchIncrement, watchDecrement } from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

// const store = createStore(reducers, compose( applyMiddleware(sagaMiddleware), composeEnhancers));
const store = createStore(reducers, compose( applyMiddleware(...middleware), composeEnhancers));

sagaMiddleware.run(watchIncrement);
sagaMiddleware.run(watchDecrement);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
