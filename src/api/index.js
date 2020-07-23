import axios from 'axios'; //library which allows you to make API calls. this can be use to monitor request, modify request etc.
import {BASE_URL, NEWS_API_KEY} from '../utils/constancts';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: NEWS_API_KEY},
});

const getHeadLines = (payload) => api.get('./topheadLines?country=us');

export default {
    getHeadLines
};