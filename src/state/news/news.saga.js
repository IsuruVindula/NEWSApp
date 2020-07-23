//saga functions are used to manage API calls in an application. Also to manage side effects

import {takeLatest, put, take} from 'redux-saga/effects';
import {REQUEST, SUCCESS} from '../../utils/constancts';
import newsActionTypes from './news.types';
import api from '../../api';

function* getArticals(actions) { //generater function. return(yield) muiltiple values then come back to function
    const request = {
        action: newsActionTypes.GET_ARTICLES,
        api: api.getHeadLines,
    };
    yield put({type: REQUEST, payload: request})
}

export default function* watcherSaga() {
    yield takeLatest(newsActionTypes.GET_ARTICLES, getArticals);
}