import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
} from '../types/mainFeed';

export const fetchFeeds = () => ({
  type: FETCH_FEEDS_REQUEST,
});

export const fetchFeedsSuccess = (items) => ({
  type: FETCH_FEEDS_SUCCESS,
  payload: {
    items,
  },
});

export const fetchFeedsFailure = (error) => ({
  type: FETCH_FEEDS_FAILURE,
  error,
});
