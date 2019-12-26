import React from 'react';
import Head from 'next/head';
import { Container } from '../Container/Container';

import './FrameLayout.scss';
import css from './FrameLayout.scss';
import { FrameHeader } from './FrameHeader/FrameHeader';

export const FrameLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | hellofrontend.pl`
            : `hellofrontend.pl - wieści ze świata front-endu`}
        </title>
        <link rel='favico' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>
      {children}
    </>
  );
};
