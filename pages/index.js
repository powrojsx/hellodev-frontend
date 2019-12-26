import React from 'react';
import { connect } from 'react-redux';
import { Layout } from '../components/Layout/Layout';
import { Masnory } from '../components/Masnory/Masnory';

const Home = ({ test }) => {
  console.log(test);
  return (
    <Layout>
      <Masnory />
    </Layout>
  );
};

export default connect((state) => ({ test: state.test }))(Home);
