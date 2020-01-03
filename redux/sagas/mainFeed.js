import { takeLatest, call, put } from 'redux-saga/effects';
import { client } from '../../config/gqlClient';
import { gql } from 'apollo-boost';
import { FETCH_FEEDS_REQUEST } from '../types/mainFeed';
import { fetchFeedsSuccess, fetchFeedsFailure } from '../actions/mainFeed';

function* fetchFeeds(action) {
  try {
    const res = yield call(client.query, {
      query: gql`
        query {
          RssSourceItems(limit: 50, page: 1, sort: NEWEST) {
            data {
              title
              id
              author
              image_url
              link
              description
              source {
                name
                favicon_url
                color_1
                color_2
              }
            }
          }
        }
      `,
    });

    if (res.networkStatus !== 7) {
      throw new Error('API Error');
    }

    yield put(fetchFeedsSuccess(res.data.RssSourceItems.data));
  } catch (error) {
    yield put(fetchFeedsFailure(error.message));
  }
}

export const mainFeedSagas = [takeLatest(FETCH_FEEDS_REQUEST, fetchFeeds)];
