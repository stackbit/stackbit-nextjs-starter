const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');
sourcebit.fetch(sourcebitConfig);

module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['source.unsplash.com'],
  },
};
