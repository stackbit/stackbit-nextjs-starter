const path = require('path');
const { cssClassesFromFilePath, urlPathFromFilePath } = require('./src/utils/path');
const { resolveReferenceFields, flattenMarkdownData, postProcessContactFormEmails } = require('./src/utils/process-data');

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
        flattenMarkdownData(),
        resolveReferenceFields(),
        postProcessContactFormEmails(),
        {
            module: require('sourcebit-target-next'),
            options: {
                liveUpdate: isDev,
                flattenAssetUrls: true,
                pages: (data) => {
                    const pages = data.filter((page) => page.__metadata.sourceName === 'pages');
                    const site = data.find((page) => page.__metadata.id === 'content/data/config.json');
                    return pages.map((page) => {
                        const path = urlPathFromFilePath(page.__metadata.relSourcePath);
                        const pageCssClasses = cssClassesFromFilePath(page.__metadata.relSourcePath);
                        return {
                            path,
                            site,
                            page: {
                                ...page,
                                __metadata: {
                                    ...page.__metadata,
                                    pageCssClasses
                                }
                            }
                        };
                    });
                }
            }
        }
    ]
};
