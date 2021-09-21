const path = require('path');
const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');
const withStackbitComponents = require('@stackbit/components/next-stackbit-components')({
    componentsMapPath: '.stackbit/components-map.json'
});

sourcebit.fetch(sourcebitConfig);

module.exports = withStackbitComponents({
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    eslint: {
        // Allow production builds to successfully complete even if your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    webpack: (config, { webpack, isServer }) => {
        // temporary: for local development -  edit package.json "@stackbit/components": "file:../stackbit-components/dist" and uncomment the alias below.
        config.resolve.alias['react'] = path.resolve('./node_modules/react');
        config.resolve.alias['next'] = path.resolve('./node_modules/next');

        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack receompiles the app and refreshes the whole page.
        // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
        // function to update the content on the page without refreshing the
        // whole page
        config.plugins.push(new webpack.WatchIgnorePlugin({ paths: [/\/content\//] }));

        if (process.env.ANALYZE === 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    openAnalyzer: true,
                    analyzerMode: 'server',
                    analyzerPort: isServer ? 8888 : 8889
                    // analyzerMode: 'static',
                    // reportFilename: isServer
                    //     ? '../analyze/server.html'
                    //     : './analyze/client.html'
                })
            );
        }

        return config;
    }
});
