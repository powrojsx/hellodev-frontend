import React from 'react';
import App from 'next/app';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { configureStore } from '../redux/store';
import { client } from '../config/gqlClient';

Modal.setAppElement('#modal-container');

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          <div id='modal-container' />
        </ApolloProvider>
      </>
    );
  }
}

export default withRedux(configureStore, {
  storeKey: 'test123',
})(withReduxSaga(MyApp));
