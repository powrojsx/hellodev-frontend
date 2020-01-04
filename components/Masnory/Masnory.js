import React from 'react';
import css from './Masnory.scss';
import classNames from 'classnames';
import Link from 'next/link';
import slugify from 'slugify';
import hexToRgba from 'hex-rgba';
import { getContrast } from '../../utils/colorContrast';

export const Masnory = ({ items }) => {
  return (
    <main className={css.Masnory}>
      {items.map((item, index) => {
        const style = {
          background: item.image_url
            ? `url(${item.image_url})`
            : `linear-gradient(300deg, ${item.source.color_2} 0%, ${hexToRgba(
                item.source.color_1,
                100
              )} 100%)
                `,
        };

        const overlayClasses = classNames({
          [css.Overlay]: true,
          [css.OverlayGradient]: item.image_url,
        });

        if (item.source.type === 'OTHER') {
          return (
            <div key={index} className={css.Item} style={style}>
              <Link
                href='/post/[id]/[slug]'
                as={`/post/${item.id}/${slugify(item.title, { lower: true })}`}
              >
                <a className={css.Link}>
                  <div className={overlayClasses}>
                    <p
                      className={css.Author}
                      style={{
                        color: getContrast(item.source.color_1),
                      }}
                    >
                      {item.author}
                    </p>
                    <p
                      className={css.Title}
                      style={{
                        color: getContrast(item.source.color_2),
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          );
        }

        if (item.source.type === 'YOUTUBE') {
          return (
            <div key={index} className={css.Item} style={style}>
              <Link
                href='/video/[id]/[slug]'
                as={`/video/${item.id}/${slugify(item.title, { lower: true })}`}
              >
                <a className={css.Link}>
                  <div className={overlayClasses}>
                    <p className={css.Author}>{item.author}</p>
                    <p className={css.Title}>{item.title}</p>
                    <div className={css.Description}>
                      <div className={css.Youtube}>
                        <span className='fa fa-play'></span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        }
      })}
    </main>
  );
};
