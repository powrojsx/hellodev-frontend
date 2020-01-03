import {
  FETCH_SINGLE_FEED_REQUEST,
  FETCH_SINGLE_FEED_SUCCESS,
  FETCH_SINGLE_FEED_FAILURE,
} from '../types/singleFeed';

const INITIAL_STATE = {
  isLoading: false,
  link: '',
  title: '',
  error: '',
};

export const singleFeedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SINGLE_FEED_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SINGLE_FEED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        link: action.payload.link,
        title: action.payload.title,
      };

    case FETCH_SINGLE_FEED_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
