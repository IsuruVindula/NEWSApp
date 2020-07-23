import newsActionTypes from './news.types';

const getArticles = () => {
    return{
        type: newsActionTypes.GET_ARTICLES,
    };
};

//get articals is an action creater
//action creater is a function which return an action
// in this action returns an object
//action has a type
//type is just a string

export {getArticles};