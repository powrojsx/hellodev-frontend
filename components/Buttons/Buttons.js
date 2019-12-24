import React, { Children } from 'react';
import classNames from 'classnames';
import css from './Buttons.scss';

export const Button = (props) => {
  const buttonClasses = classNames({
    [css.Button]: true,
    [css.Primary]: props.primary,
  });

  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
};
