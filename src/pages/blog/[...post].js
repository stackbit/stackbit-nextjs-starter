import React from 'react';
import Markdown from 'markdown-to-jsx';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { HeroSection } from '../../components';

function Post(props) {
  const { page } = props;

  const heroData = {
    variant: 'variant-c',
    title: page.title,
    text: page.text,
    alignHoriz: 'center',
    image: page.imageUrl,
  };

  return (
    <div className="container m-auto">
      <div className="p-4">
        <h3>Post</h3>
        <h1>{page.title}</h1>
        <HeroSection {...heroData} />
        <Markdown>{page.markdown}</Markdown>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let pages = await sourcebitDataClient.getStaticPages();
  const posts = pages.filter((page) => page.page.layout === 'post');
  const paths = posts.map((page) => {
    let path = page.path;
    // @TODO the returned paths should be relative to /src/pages/blog/[...post].js which is annoying
    if (path.startsWith('/blog/')) {
      path = path.substring(6);
    }
    return {
      params: {
        post: path.split('/'),
      },
    };
  });
  // console.log(JSON.stringify(paths, null, 2));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/blog/' + params.post);
  console.log(props);
  return { props };
}

export default withRemoteDataUpdates(Post);
