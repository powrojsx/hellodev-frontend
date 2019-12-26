import React from 'react';
import App from 'next/app';
import Modal from 'react-modal';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { configureStore } from '../redux/store';

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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <div id='modal-container' />
      </>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
