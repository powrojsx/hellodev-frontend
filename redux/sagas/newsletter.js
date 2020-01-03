import { call, put, takeEvery } from 'redux-saga/effects';
import { SAVE_TO_NEWSLETTER_REQUEST } from '../types/newsletter';

function* saveToNewsletter(action) {
  const { email } = action.payload;
  console.log(email);
}

export const newsletterSagas = [
  takeEvery(SAVE_TO_NEWSLETTER_REQUEST, saveToNewsletter),
];
