import React from 'react';
import App from 'next/app';
import Modal from 'react-modal';

Modal.setAppElement('#modal-container');

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <div id='modal-container' />
      </>
    );
  }
}

export default MyApp;
