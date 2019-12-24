import React from 'react';
import css from './Container.scss';

export const Container = ({ children }) => (
  <div className={css.Container}>{children}</div>
);
