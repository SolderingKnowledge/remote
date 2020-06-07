// import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* incrementAsync(action) {
        const res = yield axios.put(`http://localhost:5000/todo/increment/${action.id}`);
        yield put({ type: "INCREMENT_SAGA", payload: res.data });
}

function* decrementAsync (action){
    const res = yield axios.put(`http://localhost:5000/todo/decrement/${action.id}`);
    yield put({ type: "DECREMENT_SAGA", payload: res.data });
}


// listen for redux actions and intercept
export function* watchIncrement() {
  yield takeLatest("INCREMENT_PRIORITY", incrementAsync);
}
export function* watchDecrement(){
    yield takeLatest("DECREMENT_PRIORITY", decrementAsync)
}