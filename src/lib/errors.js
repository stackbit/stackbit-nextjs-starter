import { pascalCase } from 'change-case';

export const componentLoadError = (type, variant, meta) => {
  throw new Error(
    `No component found. Trying to load the component "${type}" from ${
      meta.relProjectPath
    }. Tried to find the component ${pascalCase(type)} in the Stackbit Components library`
  );
};
