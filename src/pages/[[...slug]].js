import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { pascalCase } from 'change-case';

import Layout from '../components/global/Layout';
import stackbitComponents from '../../../stackbit-components/src/components';
import { componentLoadError } from '../lib/errors';

export default function LandingPage(props) {
  console.log('props', JSON.stringify(props, null, 4));
  const { page } = props;
  const { frontmatter, __metadata } = page;
  const { sections, title } = frontmatter;
  return (
    <Layout title={title}>
      {sections.map((section, sectionIndex) => {
        const { type, variant } = section;
        const Component = stackbitComponents[pascalCase(type)];
        if (!Component) {
          return componentLoadError(type, variant, __metadata);
        }
        return <Component {...section} key={`${type}-${sectionIndex}`} type={type} variant={variant} />;
      })}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sourcebitDataClient.getStaticPaths();
  console.log('Page [...slug].js getStaticPaths', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);

  return { props };
}
