import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from '../components/Layout/Layout';
import { Masnory } from '../components/Masnory/Masnory';
import { fetchFeeds } from '../redux/actions/mainFeed';

const Home = ({ fetchFeedsAction, feeds }) => {
  useEffect(() => {
    fetchFeedsAction();
  }, []);

  return (
    <Layout>
      <Masnory items={feeds} />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.mainFeed.items,
});

const mapDispatchToProps = {
  fetchFeedsAction: fetchFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
