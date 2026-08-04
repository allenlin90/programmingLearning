import { combineReducers } from 'redux';
import postReducer from './post-reducer';
import usersReducer from './users-reducer';

export default combineReducers({
    posts: postReducer,
    users: usersReducer
});