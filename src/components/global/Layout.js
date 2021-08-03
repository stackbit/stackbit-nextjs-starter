import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
