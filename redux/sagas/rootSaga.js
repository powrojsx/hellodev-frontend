import { all } from 'redux-saga/effects';
import { newsletterSagas } from './newsletter';
import { mainFeedSagas } from './mainFeed';
import { singleFeedSagas } from './singleFeed';

export function* rootSaga() {
  yield all([...newsletterSagas, ...mainFeedSagas, ...singleFeedSagas]);
}
