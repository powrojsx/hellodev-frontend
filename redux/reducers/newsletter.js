import {
  SHOW_NEWSLETTER_MODAL,
  HIDE_NEWSLETTER_MODAL,
} from '../types/newsletter';

const INITIAL_STATE = {
  isOpen: false,
};

export const newsletterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NEWSLETTER_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_NEWSLETTER_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};
