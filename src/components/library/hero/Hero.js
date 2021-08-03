import React from 'react';
import { pascalCase } from 'change-case';
import EmptyComponent from '../../global/EmptyComponent';
import Hero1 from './variants/Hero1';
import Hero2 from './variants/Hero2';
import Hero3 from './variants/Hero3';
import Hero7 from './variants/Hero7';

const variants = {
  Hero1,
  Hero2,
  Hero3,
  Hero7
};

const defaultFields = {
  heading: 'Default Heading',
  subHeading: 'Default Sub Heading',
  image: '',
  buttons: [],
};

export const Hero = (props) => {
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
