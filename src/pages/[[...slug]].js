import React from 'react';
import Head from 'next/head';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getDynamicComponent } from '@stackbit/components/components-registry';
import NavBar from '@stackbit/components/components/navbar';
import Footer from '@stackbit/components/components/footer';

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
      {props.page.sections.map((section, index) => {
        const componentType = section?.type;
        const Component = getDynamicComponent(componentType);
        if (!Component) {
          throw new Error(`no component matching the page section's type: ${componentType}`);
        }
        return <Component key={index} {...section} />;
      })}
      <Footer {...props.siteConfig} />
    </div>
  );
}

export async function getStaticPaths() {
  // @TODO error - Conflicting paths returned from getStaticPaths, paths must unique per page.
  // See more info here: https://nextjs.org/docs/messages/conflicting-ssg-paths
  let pages = await sourcebitDataClient.getStaticPages();
  const paths = pages.filter((page) => page.page.layout === 'advanced').map((page) => page.path);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);
  return { props };
}

export default withRemoteDataUpdates(Page);
