const _ = require('lodash');
const util = require('util');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-filesystem'),
      options: {
        watch: isDev,
      },
    },
    (res) => {
      console.log(
        util.inspect(res, {
          showHidden: true,
          depth: 5,
        })
      );
      return {
        module: require('sourcebit-target-next'),
        options: {
          liveUpdate: isDev,
          flattenAssetUrls: true,
          pages: [{ path: '/{__metadata.urlPath}', predicate: _.matchesProperty('__metadata.modelName', 'advanced') }],
          commonProps: {
            pages: { predicate: _.matchesProperty('__metadata.modelType', 'page') },
          },
        },
      };
    },
  ],
};
