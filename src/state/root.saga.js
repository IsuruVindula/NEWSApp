import{all} from 'redux-saga/effects';
import requestSaga from './request.saga';
import newSaga from './news/news.saga';

export default function* rootSaga() {
    yield all ([requestSaga(), newSaga()]); //make sure that watcherSaga functions are executed
}