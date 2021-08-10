import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getDynamicComponent } from '@stackbit/components/components-registry';

function Page(props) {
  const layout = props.page?.layout;
  if (!layout) {
    throw new Error(`page has no layout, page '${props.path}'`);
  }
  const PageLayout = getDynamicComponent(layout);
  if (!PageLayout) {
    throw new Error(`no page layout matching the layout: ${layout}`);
  }
  return <PageLayout {...props} />;
}

export async function getStaticPaths() {
  const paths = await sourcebitDataClient.getStaticPaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
  return { props };
}

export default withRemoteDataUpdates(Page);
