import React from 'react';
import css from './Masnory.scss';
import classNames from 'classnames';
import Link from 'next/link';
import slugify from 'slugify';
import hexToRgba from 'hex-rgba';

export const Masnory = ({ items }) => {
  return (
    <main className={css.Masnory}>
      {items.map((item, index) => {
        const style = {
          background: item.image_url
            ? `url(${item.image_url})`
            : // : `linear-gradient(150deg, #fff 0%, ${hexToRgba(
              //     item.source.color_1,
              //     20
              // )} 100%)
              //   `,
              null,
        };

        const overlayClasses = classNames({
          [css.Overlay]: true,
          [css.OverlayGradient]: item.image_url,
        });
        return (
          <div key={index} className={css.Item} style={style}>
            <Link
              href='/post/[id]/[slug]'
              as={`/post/${item.id}/${slugify(item.title, { lower: true })}`}
            >
              <a className={css.Link}>
                <div className={overlayClasses}>
                  <p className={css.Author}>{item.author}</p>
                  <p className={css.Title}>{item.title}</p>
                  {/* <p className={css.Description}>{item.description}...</p> */}
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </main>
  );
};
