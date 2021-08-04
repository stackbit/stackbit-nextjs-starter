import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';

import { BaseLayout, dynamicLayouts } from '@stackbit/components/dist/layouts';

class Page extends React.Component {
  render() {
    const siteConfig = this.props?.siteConfig;
    const page = this.props?.page;
    const layout = this.props?.page?.layout;
    if (!layout) {
      throw new Error(`page has no layout, page '${this.props.path}'`);
    }
    const PageLayout = dynamicLayouts[layout];
    if (!PageLayout) {
      throw new Error(`no page layout matching the layout: ${layout}`);
    }
    return (
      <BaseLayout page={page} config={siteConfig}>
        <PageLayout {...this.props} />
      </BaseLayout>
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
