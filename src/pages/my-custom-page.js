import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';

const heroData = {
  type: 'hero_section',
  variant: 'variant-b',
  title: 'A different kind of fish market',
  text: 'A group of local fisherman, working to deliver sustainable fish to your table. Each fish you buy, helps support fishing regulations and laws, to help sustain a better future for our waters, our food, and our globe.',
};
function Page(props) {
  return (
    <div>
      <h1>My Custom Page!</h1>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/my-custom-page');
  return { props };
}

export default withRemoteDataUpdates(Page);
