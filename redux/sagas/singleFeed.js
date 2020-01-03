import { call, takeLatest, put } from 'redux-saga/effects';
import { client } from '../../config/gqlClient';
import { gql } from 'apollo-boost';
import { FETCH_SINGLE_FEED_REQUEST } from '../types/singleFeed';
import { fetchSingleFeedSucces } from '../actions/singleFeed';

function* fetchFeed(action) {
  try {
    const { id } = action.payload;

    const res = yield call(client.query, {
      query: gql`
        {
          RssSourceItem(id: ${id}) {
            id
            link
            title
          }
        }
      `,
    });

    if (res.networkStatus !== 7) {
      throw new Error('API Error');
    }

    yield put(
      fetchSingleFeedSucces(
        res.data.RssSourceItem.link,
        res.data.RssSourceItem.title
      )
    );
  } catch (error) {
    throw new Error();
  }
}

export const singleFeedSagas = [
  takeLatest(FETCH_SINGLE_FEED_REQUEST, fetchFeed),
];
