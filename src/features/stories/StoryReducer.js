import * as actionTypes from './actionTypes';

const initialState = {
  stories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STORY_SUCCESS:
      return {
        ...state,
        stories: action.stories
      };
    
    default:
      return state;
  }
};
