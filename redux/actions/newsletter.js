import {
  SHOW_NEWSLETTER_MODAL,
  HIDE_NEWSLETTER_MODAL,
} from '../types/newsletter';

export const showNewsletterModal = () => ({
  type: SHOW_NEWSLETTER_MODAL,
});

export const hideNewsletterModal = () => ({
  type: HIDE_NEWSLETTER_MODAL,
});
