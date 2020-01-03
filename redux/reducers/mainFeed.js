import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
} from '../types/mainFeed';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: '',
};

export const mainFeedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FEEDS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload.items],
        loading: false,
      };

    case FETCH_FEEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
