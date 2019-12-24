import React from 'react';
import css from './Header.scss';
import Link from 'next/link';
import { useScrollYPosition } from 'react-use-scroll-position';
import classNames from 'classnames';

import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const scrollY = useScrollYPosition();

  const headerClasses = classNames({
    [css.Header]: true,
    [css.Scrolled]: scrollY >= 55,
  });

  return (
    <header className={headerClasses}>
      <div className={css.Container}>
        <h1 className={css.Logo}>
          <Link href='/'>
            <a>hellofrontend</a>
          </Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};
