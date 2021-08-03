module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-filesystem'),
      options: {
        watch: isDev,
      },
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        pages: [
          { path: '/{__metadata.urlPath}', predicate: _.matchesProperty('__metadata.modelName', 'advanced') },
          { path: '/{__metadata.urlPath}', predicate: _.matchesProperty('__metadata.modelName', 'page') },
          { path: '/{__metadata.urlPath}', predicate: _.matchesProperty('__metadata.modelName', 'post') },
        ],
        commonProps: {
          pages: { predicate: _.matchesProperty('__metadata.modelType', 'page') },
          posts: { predicate: _.matchesProperty('__metadata.modelName', 'post') },
          data: { single: true, predicate: _.matchesProperty('__metadata.id', 'sourcebit-source-filesystem:data') },
        },
      },
    },
  ],
};
