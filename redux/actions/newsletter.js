import {
  SHOW_NEWSLETTER_MODAL,
  HIDE_NEWSLETTER_MODAL,
  SAVE_TO_NEWSLETTER_REQUEST,
} from '../types/newsletter';

export const showNewsletterModal = () => ({
  type: SHOW_NEWSLETTER_MODAL,
});

export const hideNewsletterModal = () => ({
  type: HIDE_NEWSLETTER_MODAL,
});

export const saveToNewsletter = (email) => ({
  type: SAVE_TO_NEWSLETTER_REQUEST,
  payload: {
    email,
  },
});
