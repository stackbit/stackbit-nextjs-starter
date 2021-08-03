import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentPagesDir = path.join(process.cwd(), 'content', 'pages');
const contentPagesFilenames = fs.readdirSync(contentPagesDir);
const contentDataDir = path.join(process.cwd(), 'content', 'data');

const loadComponentData = async (component) => {
  const output = {
    ...component,
  };

  if (component.id && component.dataSource) {
    if (component.dataSource.type === 'md') {
      const fileName = `${component.dataSource.id}.md`;
      const fullPath = path.join(contentDataDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const frontmatter = matter(fileContents);
      output.data = frontmatter.data;
      output.fields = frontmatter.data.fields;

      output.options = frontmatter.data?.options || null;
    }
    if (component.dataSource.type === 'json') {
      const fileName = `${component.dataSource.id}.json`;
      const fullPath = path.join(contentDataDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(fileContents);
      output.data = data;
      output.fields = data.fields;

      output.options = data?.options || null;
    }
  }
  if (component.data) {
    output.fields = {
      ...output?.fields,
      ...component?.data?.fields,
    };
    // Hacky POC
    if (component?.data?.fields?.pageReferences) {
      const references = await Promise.all(
        component?.data?.fields?.pageReferences.map((reference) => {
          console.log(reference.url);
          return sourcePage(reference.url.split('/'));
        })
      );
      output.fields.pageReferences = references;
    }
  }
  if (component.dataSource?.transform) {
    const fieldKeys = Object.keys(output.fields);
    const transformKeys = Object.keys(component.dataSource.transform);
    fieldKeys.forEach((fieldKey) => {
      transformKeys.forEach((transformKey) => {
        if (fieldKey === transformKey) {
          output.fields[component.dataSource.transform[fieldKey]] =
            output.fields[fieldKey];
          delete output.fields[fieldKey];
        }
      });
    });
  }

  return output;
};

const loadSectionData = async (section) => {
  const components = await Promise.all(
    section.components.map((component) => loadComponentData(component))
  );
  return {
    ...section,
    components,
  };
};

const loadSections = async (arrangement) => {
  const sections = await Promise.all(
    arrangement.sections.map((section) => loadSectionData(section))
  );
  return {
    ...arrangement,
    sections,
  };
};

const loadArrangement = async (id) => {
  let arrangement;
  let meta;

  contentPagesFilenames.forEach((filename) => {
    const fullPath = path.join(contentPagesDir, filename);
    let rawData = fs.readFileSync(fullPath);
    let data = JSON.parse(rawData);
    if (id === data.url) {
      arrangement = data;
      meta = {
        fullPath,
        filename,
      };
    }
  });

  return {
    arrangement,
    meta,
  };
};

export const sourcePage = async (id) => {
  let idJoin = '/';
  if (id) {
    idJoin = id.join('/');
  }
  const { arrangement, meta } = await loadArrangement(idJoin);
  const page = await loadSections(arrangement);
  return {
    page,
    meta,
  };
};

export const sourcePaths = async (route) => {
  let paths = [];
  contentPagesFilenames.forEach((filename) => {
    let data = JSON.parse(
      fs.readFileSync(path.join(contentPagesDir, filename))
    );
    if (data.url === '/') {
      paths.push({
        params: {
          [route]: [],
        },
      });
    } else if (data.url) {
      paths.push({
        params: {
          [route]: data.url.split('/'),
        },
      });
    }
  });
  return paths;
};
