import React from 'react';
import { pascalCase } from 'change-case';
import EmptyComponent from '../../global/EmptyComponent';
import Reference1 from './variants/Reference1';

const variants = {
  Reference1,
};

const defaultFields = {
  pageReferences: [
    {
      url: null
    }
  ]
};

export const Reference = (props) => {
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
