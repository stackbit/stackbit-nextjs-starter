import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';

import { Advanced }  from '@stackbit/components/layouts';

class Page extends React.Component {
  render() {
    const layout = this.props?.page?.layout;
    if (!layout) {
      throw new Error(`page has no layout, page '${this.props.path}'`);
    }
    const PageLayout = Advanced;//dynamicLayouts[layout];
    if (!PageLayout) {
      throw new Error(`no page layout matching the layout: ${layout}`);
    }
    return (
      <PageLayout {...this.props} />
    );
  }
}

export default withRemoteDataUpdates(Page);

export async function getStaticPaths() {
  console.log('Page [...slug].js getStaticPaths');
  const paths = await sourcebitDataClient.getStaticPaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
  return { props };
}
