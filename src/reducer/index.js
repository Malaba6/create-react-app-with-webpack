import { combineReducers } from 'redux';
import stories from '../features/stories/StoryReducer';
import signup from '../features/signup/SignupReducer';
import login from '../features/login/LoginReducer';

console.log('Store now');
export default combineReducers({
  stories,
  signup,
  login
});