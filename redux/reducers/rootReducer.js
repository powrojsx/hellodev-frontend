import { combineReducers } from 'redux';
import { newsletterReducer } from './newsletter';

export const rootReducer = combineReducers({
  newsletter: newsletterReducer,
});
