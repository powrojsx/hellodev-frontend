import React, { useEffect } from 'react';
import { FrameLayout } from '../../../components/FrameLayout/FrameLayout';
import css from '../../../components/FrameLayout/FrameLayout.scss';
import { FrameHeader } from '../../../components/FrameLayout/FrameHeader/FrameHeader';

import { useRouter } from 'next/router';
import slugify from 'slugify';
import Lottie from 'react-lottie';

import loader from '../../../assets/loader.json';
import errorAnimation from '../../../assets/error.json';
import { fetchSingleFeed } from '../../../redux/actions/singleFeed';
import { connect } from 'react-redux';

const Base = ({ children }) => {
  return (
    <FrameLayout>
      <FrameHeader />
      <div className={css.Container}>{children}</div>
    </FrameLayout>
  );
};

const post = ({ fetchSingleFeedAction, feed }) => {
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    fetchSingleFeedAction(id);
  }, []);

  if (feed.isLoading) {
    return (
      <Base>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: loader,
          }}
          width={200}
          height={200}
        />
      </Base>
    );
  }

  if (feed.error) {
    return (
      <Base>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: errorAnimation,
          }}
          width={200}
          height={200}
        />
        <p className={css.ErrorMessage}>Coś poszło nie tak 🙁</p>
      </Base>
    );
  }
  return (
    <Base>
      <iframe
        id={slugify(feed.item.title, { lower: true })}
        title={feed.item.title}
        className={css.Frame}
        src={feed.item.alternate_link}
      ></iframe>
    </Base>
  );
};

const mapStateToProps = (state) => ({
  feed: state.singleFeed,
});

const mapDispatchToProps = {
  fetchSingleFeedAction: fetchSingleFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(post);
