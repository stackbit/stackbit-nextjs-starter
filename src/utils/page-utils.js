const path = require('path');

function urlPathFromFilePath(filePath) {
    const pathObject = path.parse(filePath);
    const parts = pathObject.dir.split(path.sep).filter(Boolean);
    if (pathObject.name !== 'index') {
        parts.push(pathObject.name);
    }
    const urlPath = parts.join('/').toLowerCase();
    return '/' + urlPath;
}

function cssClassesFromUrlPath(urlPath) {
    const parts = urlPath.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function cssClassesFromFilePath(filePath) {
    const pathObject = path.parse(filePath);
    const parts = pathObject.dir.split(path.sep).filter(Boolean);
    parts.push(pathObject.name);

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function flattenMarkdownData() {
    return ({ data }) => {
        const objects = data.objects.map((object) => {
            if ('frontmatter' in object) {
                return {
                    __metadata: object.__metadata,
                    ...object.frontmatter,
                    markdown_content: object.markdown || null
                };
            }
            return object;
        });

        return {
            ...data,
            objects
        };
    };
}

module.exports = {
    urlPathFromFilePath,
    cssClassesFromUrlPath,
    cssClassesFromFilePath,
    flattenMarkdownData
};
