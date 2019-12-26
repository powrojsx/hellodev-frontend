import React from 'react';
import css from './FrameHeader.scss';
import { useScrollYPosition } from 'react-use-scroll-position';
import classNames from 'classnames';
import { Vote } from '../../Vote/Vote';

export const FrameHeader = () => {
  const scrollY = useScrollYPosition();

  const headerClasses = classNames({
    [css.Header]: true,
    [css.Scrolled]: scrollY >= 55,
  });

  const goBack = () => {
    window.history.back();
  };

  return (
    <header className={headerClasses}>
      <div className={css.Container}>
        <button onClick={goBack} className={css.GoBackButton}>
          <span className='fa fa-chevron-left'></span> Powrót
        </button>
        <Vote />
      </div>
    </header>
  );
};
