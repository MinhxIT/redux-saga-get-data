import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers/reducers';
import { watcherSaga } from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducers,applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(watcherSaga);
export default store;
