import { combineReducers } from 'redux';
import { newsletterReducer } from './newsletter';
import { mainFeedReducer } from './mainFeed';
import { singleFeedReducer } from './singleFeed';

export const rootReducer = combineReducers({
  newsletter: newsletterReducer,
  mainFeed: mainFeedReducer,
  singleFeed: singleFeedReducer,
});
