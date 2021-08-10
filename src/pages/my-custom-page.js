import React from 'react';
import Head from 'next/head';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import NavBar from '@stackbit/components/components/navbar';
import { Hero } from '../components/zerostatic/hero/Hero';

const heroData = {
  variant: 'Hero1',
  title: 'A different kind of fish market',
  text: 'A group of local fisherman, working to deliver sustainable fish to your table. Each fish you buy, helps support fishing regulations and laws, to help sustain a better future for our waters, our food, and our globe.',
};
function Page(props) {
  return (
    <div>
      <Head>
        <title>{props.page.title}</title>
        <meta name="description" content="Stackbit Components Library" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>
      <NavBar {...props.siteConfig} />
      <Hero fields={heroData} variant={heroData.variant} />
      <h1>My Custom Page!</h1>
    </div>
  );
}
export async function getStaticProps() {
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/my-custom-page');
  return { props };
}

export default withRemoteDataUpdates(Page);
