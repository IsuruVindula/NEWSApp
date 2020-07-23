//reducers' update the relavent part in application state
//reducers' returns parts of the application state
//this one is responsible for updating data relevant to news

import newsActionTypes from './news.types';

const initialState = {
    articles: [],
};

export default (state = initialState, {type, payload}) => { //reducer function
    switch(type){
        case newsActionTypes.GET_ARTICLES + SUCCESS:
            return{
                ...state,   //we dont override the previous state.
                //We create new state object and copy the current state into that
                // this is how we dot the state manupultion. we dont directly access the state.
                articles: payload,
            };
        default:
            return state;
    }
}