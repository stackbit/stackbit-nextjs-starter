import { pascalCase } from 'change-case';

export const componentLoadError = (id, meta) => {
  throw new Error(
    `No component found. Trying to load the component "${id}" from ${
      meta.filename
    }. Tried to find the component ${pascalCase(
      id
    )} in "src/components/library/index.js`
  );
};
