import React from 'react';
import css from './Trigger.scss';
import classNames from 'classnames';

export const Trigger = ({ closeTrigger, onClick }) => {
  const triggerClasses = classNames({
    [css.Trigger]: true,
    [css.Close]: closeTrigger,
    'hide-on-large': true,
  });

  return (
    <button className={triggerClasses} onClick={onClick}>
      <div />
      <div />
      <div />
    </button>
  );
};
