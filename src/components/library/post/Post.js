import React from 'react';
import { pascalCase } from 'change-case';
import EmptyComponent from '../../global/EmptyComponent';
import Post1 from './variants/Post1';

const variants = {
  Post1,
};

const defaultFields = {
  heading: 'Default Heading',
  subHeading: 'Default Sub Heading',
  image: ''
};

export const Post = (props) => {
  const { variant } = props;
  const fields = {
    ...defaultFields,
    ...props?.fields,
  };
  const Component = variants[pascalCase(variant)];
  if (!Component) {
    return <EmptyComponent {...props} />;
  }
  return <Component fields={fields} />;
};
