import React, { useState } from 'react';
import css from './Navigation.scss';
import Link from 'next/link';
import { Trigger } from './Trigger/Trigger';
import classNames from 'classnames';

export const Navigation = () => {
  const navigationItems = [
    {
      name: 'Strona główna',
      path: '/',
    },
    {
      name: 'Najlepiej oceniane',
      path: '/best-ratings',
    },
    {
      name: 'Dodaj bloga',
      path: '/add',
    },
  ];

  const [isOpen, toggleNav] = useState(false);

  const listClasses = classNames({
    [css.List]: true,
    [css.Open]: isOpen,
  });

  return (
    <nav className={css.Navigation}>
      <div className={css.Container}>
        <Trigger onClick={() => toggleNav(!isOpen)} />
        <ul className={listClasses}>
          <Trigger onClick={() => toggleNav(!isOpen)} closeTrigger={true} />
          {navigationItems.map((item, index) => (
            <li className={css.Item} key={index}>
              <Link href={item.path}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
          <li className={css.Item}>
            <a
              href='https://discord.gg/KRADmZN'
              rel='noopener norefferer'
              target='_blank'
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
