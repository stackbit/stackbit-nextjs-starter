const path = require('path');
const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['source.unsplash.com'],
  },
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { webpack, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, '../stackbit-components')],
      use: [defaultLoaders.babel],
    });

    return config;
  },
};
