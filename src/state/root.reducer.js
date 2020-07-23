// root.reducer combines all the resucers into a one large object

import { combineReducers } from 'redux';
import news from './news/news.reducer'; // you have to import all the reducers here

const rootReducer = combineReducers({
    news,
});

export default rootReducer;