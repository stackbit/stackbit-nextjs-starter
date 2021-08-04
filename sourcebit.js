const _ = require('lodash');
const util = require('util');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-filesystem'),
      options: {
        watch: isDev,
        sources: [
          { name: 'pages', path: path.join(__dirname, 'content/pages') },
          { name: 'data', path: path.join(__dirname, 'content/data') }
        ]
      },
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        pages: (data) => {
          const pages = _.filter(data, _.matchesProperty('frontmatter.layout', 'advanced'));
          const config = _.find(data, _.matchesProperty('__metadata.id', 'content/data/config.json'))
          return _.map(pages, (page) => {
            return {
              // TODO: infer path from file name
              path: page.__metadata.relSourcePath === 'index.md' ? '/' : '/test',
              siteConfig: config,
              page: {
                __metadata: page.__metadata,
                ...(page.frontmatter ?? {}),
                markdown: page.markdown || null,
              }
            }
          });
        }
      },
    },
  ],
};
