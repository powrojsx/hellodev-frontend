import {
  FETCH_SINGLE_FEED_REQUEST,
  FETCH_SINGLE_FEED_SUCCESS,
  FETCH_SINGLE_FEED_FAILURE,
} from '../types/singleFeed';

export const fetchSingleFeed = (id) => ({
  type: FETCH_SINGLE_FEED_REQUEST,
  payload: {
    id,
  },
});

export const fetchSingleFeedSuccess = (item) => ({
  type: FETCH_SINGLE_FEED_SUCCESS,
  payload: {
    item,
  },
});

export const fetchSingleFeedFailure = (error) => ({
  type: FETCH_SINGLE_FEED_FAILURE,
  error,
});
