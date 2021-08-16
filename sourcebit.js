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
      }
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        pages: (data) => {
          const pages = data.filter((page) => page.__metadata.sourceName === 'pages');
          const config = data.find((page) => page.__metadata.id === 'content/data/config.json');
          return pages.map((page) => {
            const fileParse = path.parse(page.__metadata.relSourcePath);
            const name = fileParse.name === 'index' ? '/' : fileParse.name;
            const url = path.join(fileParse.dir, name);
            return {
              path: url,
              siteConfig: config,
              page: {
                __metadata: page.__metadata,
                ...(page.frontmatter ?? {}),
                markdown: page.markdown || null
              }
            };
          });
        }
      }
    }
  ]
};
