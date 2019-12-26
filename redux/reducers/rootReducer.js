import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  test: (state = { dupa: 'hehe' }, action) => state,
});
