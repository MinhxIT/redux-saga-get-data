import { all } from "redux-saga/effects";
import { watcherSaga } from "./getData";

export default function*(){
    yield all([
        watcherSaga()
    ])
}