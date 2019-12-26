import React from 'react';
import { FrameLayout } from '../../../components/FrameLayout/FrameLayout';
import css from '../../../components/FrameLayout/FrameLayout.scss';
import { FrameHeader } from '../../../components/FrameLayout/FrameHeader/FrameHeader';

export default () => {
  return (
    <FrameLayout>
      <FrameHeader />
      <iframe
        id='test'
        title='test'
        className={css.Frame}
        src='https://bycfrontendem.blog/posts/wykorzystanie-natywnych-animacji-adobe-after-effects-na-stronie-www'
      ></iframe>
    </FrameLayout>
  );
};
