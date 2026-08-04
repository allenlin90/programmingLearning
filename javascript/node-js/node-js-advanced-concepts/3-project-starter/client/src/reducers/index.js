import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth-reducer';
import blogsReducer from './blogs-reducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  blogs: blogsReducer
});
