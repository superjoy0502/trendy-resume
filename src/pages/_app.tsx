import React from 'react';
import App from 'next/app';
import Head from 'next/head';

type AppProps = {
  Component: React.ReactNode,
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Portfolio: Kim DongWoo</title>
          <meta name="description" content="Developer Kim DongWoo" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
