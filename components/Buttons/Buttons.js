import React, { Children } from 'react';
import classNames from 'classnames';
import css from './Buttons.scss';

export const Button = ({ primary, ...props }) => {
  const buttonClasses = classNames({
    [css.Button]: true,
    [css.Primary]: primary,
  });

  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
};
