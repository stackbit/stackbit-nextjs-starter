import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';

import { pascalCase } from 'change-case';
import { sourcePage, sourcePaths } from '../lib/source';
import Layout from '../components/global/Layout';
import Section from '../components/global/Section';
import ComponentWrapper from '../components/global/ComponentWrapper';
import components from '../components/library';
import { componentLoadError } from '../lib/errors';

export default function LandingPage(props) {
  // console.log('props', JSON.stringify(props, null, 4));
  const { page, meta } = props;
  const { sections, title } = page;
  return (
    <Layout title={title}>
      {sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} section={section}>
          {section.components.map((component, componentIndex) => {
            const Component = components[pascalCase(component.id)];
            if (!Component) {
              return componentLoadError(component.id, meta);
            }
            return (
              <ComponentWrapper key={componentIndex} component={component}>
                <Component
                  key={`${component.id}-${componentIndex}`}
                  variant={component.variant}
                  options={component.options}
                  fields={component.fields}
                  dataSource={component.dataSource}
                />
              </ComponentWrapper>
            );
          })}
        </Section>
      ))}
    </Layout>
  );
}

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
