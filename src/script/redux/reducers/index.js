import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
// Import Reducers
import PostsReducer from './reducer_posts';

// Combine all reducers for application state to reference
export default combineReducers({
    posts: PostsReducer,
    form: formReducer
});
