import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchSuccess = (stories) => ({
    type: actionTypes.FETCH_STORY_SUCCESS,
    stories,
});

export const fetchStories = () => async (dispatch) => {
    try {
        const {data} = await axios
        .get('https://uninet-blogs-backend.herokuapp.com/api/v1/articles');
        dispatch(fetchSuccess(data.articles));
    }catch (error) {
        return error;
    }
};
