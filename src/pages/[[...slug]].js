import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getDynamicComponent } from '@stackbit/components/components-registry';

function Page(props) {
  console.log(props);
  const { page, siteConfig } = props;
  const { layout } = page;
  if (!layout) {
    throw new Error(`page has no layout, page '${props.path}'`);
  }
  const PageLayout = getDynamicComponent(layout);
  if (!PageLayout) {
    throw new Error(`no page layout matching the layout: ${layout}`);
  }
  return <PageLayout page={page} siteConfig={siteConfig} />;
}

export async function getStaticPaths() {
  // @TODO error - Conflicting paths returned from getStaticPaths, paths must unique per page.
  // See more info here: https://nextjs.org/docs/messages/conflicting-ssg-paths
  let data = await sourcebitDataClient.getData();
  // const paths = pages.filter((page) => page.page.layout === 'advanced').map((page) => page.path);
  const paths = data.pages.map((page) => page.path);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);
  return { props };
}

export default withRemoteDataUpdates(Page);
