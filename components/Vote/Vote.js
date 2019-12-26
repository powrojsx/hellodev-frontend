import React from 'react';
import css from './Vote.scss';
import './Vote.scss';

export const Vote = () => {
  return (
    <div className={css.Container}>
      <p>Spodobał Ci się ten artykuł?</p>
      <ul className={css.List}>
        <li className={css.Item}>
          <button className={css.VoteButtonUp}>
            <span className='fa fa-thumbs-up'></span>
            1024
          </button>
        </li>
        <li className={css.Item}>
          <button className={css.VoteButtonDown}>
            <span className='fa fa-thumbs-down'></span>
            512
          </button>
        </li>
      </ul>
    </div>
  );
};
