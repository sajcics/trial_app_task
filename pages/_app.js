import React from 'react';
import App from 'next/app';
import '../styles/globalStyle.css';

import AppWrapper from './appWrapper';
import '../i18n';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}

export default MyApp;
