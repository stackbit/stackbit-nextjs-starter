import React from 'react';
import Head from 'next/head';
import { pascalCase } from 'pascal-case';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import * as stackbitLayouts from '@stackbit/components/layouts';
import * as stackbitComponents from '@stackbit/components/components';
import * as myLayouts from '../layouts';
import * as myComponents from '../components';
import { BaseLayout } from '../layouts';
import { Hero as ZeroHero } from '../components/zerostatic/hero/Hero';
// console.log(layouts);
// console.log(components);

const mergedLayouts = {
  ...stackbitLayouts,
  ...myLayouts,
};

const mergedComponents = {
  ...myComponents,
  ...stackbitComponents,
  ZeroHero,
};

function Page(props) {
  console.log('mergedLayouts', mergedLayouts);
  console.log('mergedComponents', mergedComponents);

  const layout = props.page?.layout;
  if (!layout) {
    throw new Error(`page has no layout, page '${props.path}'`);
  }
  const layoutComponent = pascalCase(layout);
  const PageLayout = mergedLayouts[layoutComponent];
  if (!PageLayout) {
    throw new Error(`no page layout matching the layout: ${layout}`);
  }
  return (
    <div>
      <Head>
        <title>{props.page.title}</title>
        <meta name="description" content="Stackbit Components Library" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>
      <mergedComponents.NavBar {...props.siteConfig} />
      {props.page.sections.map((section, index) => {
        const sectionType = section?.type;
        const sectionComponent = pascalCase(sectionType);
        console.log(sectionComponent);

        if (!sectionType) {
          throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
        }
        const Component = mergedComponents[sectionComponent];
        console.log(Component);
        if (!Component) {
          throw new Error(`no component matching the page section's type: ${sectionType}`);
        }
        return <Component key={index} {...section} />;
      })}
      <mergedComponents.Footer {...props.siteConfig} />
    </div>
  );
}

export async function getStaticPaths() {
  let pages = await sourcebitDataClient.getStaticPages();
  // @TODO error - Conflicting paths returned from getStaticPaths, paths must unique per page.
  // See more info here: https://nextjs.org/docs/messages/conflicting-ssg-paths
  const paths = pages.filter((page) => page.page.layout === 'advanced').map((page) => page.path);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
  return { props };
}

export default withRemoteDataUpdates(Page);
