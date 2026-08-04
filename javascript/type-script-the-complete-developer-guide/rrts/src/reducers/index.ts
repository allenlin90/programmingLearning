import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// this helps to catch errors
// by checking the argument passing to 'todos' reducer
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
