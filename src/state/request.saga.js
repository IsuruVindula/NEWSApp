import {call, takeEvery, put} from 'redux-saga/effects';
import {SUCCESS, FAILURE, REQUEST} from '../utils/constancts';
import { act } from 'react-test-renderer';


function requestSaga(action) {
    try {
        const response = yield call(action.payload.api, action.payload.data);
        if (response.state >= 400) {
            yield put({type: action.payload.action + FAILURE});
        } else if (response.state === 200 || response.state === 201) {
            yield put({
                type: action.payload.action + SUCCESS,
                payload: response.data,
            });
            yield put({type: REQUEST + SUCCESS});
        }
    } catch (error) {
        yield put({type: action.payload.action + FAILURE});
        yield put({type: REQUEST + FAILURE});
    }
}

export default function* watcher(){
    yield takeEvery(REQUEST, requestSaga);
}