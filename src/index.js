import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from './reducers/reducers';
import { watcherSaga } from "./sagas/sagas";
import { Provider } from "react-redux";
// tạo saga middle ware
const sagaMiddleware = createSagaMiddleware();
// tạo store 
let store = createStore(reducers,applyMiddleware(sagaMiddleware));
// chạy saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
