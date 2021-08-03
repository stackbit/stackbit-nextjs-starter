import React from 'react';
import { pascalCase } from 'change-case';
import EmptyComponent from '../../global/EmptyComponent';
import Partners1 from './variants/Partners1';

const variants = {
  Partners1,
};

export const Partners = (props) => {
  const { id, variant } = props;
  const fields = {
    partners: [
      {
        image: 'https://source.unsplash.com/7NBI_VlqsQ8/400/',
        name: 'The barren desert',
      },
      {
        image: 'https://source.unsplash.com/nIaWNpRT4vU/400/',
        name: 'the bleak peaks',
      },
      {
        image: 'https://source.unsplash.com/z7Wv-_zmlq4/400/',
        name: 'The silence of the forest',
      },
    ],
    ...props?.fields,
  };
  const Component = variants[pascalCase(variant)];
  if (!Component) {
    return <EmptyComponent {...props} />;
  }
  return <Component fields={fields} />;
};
