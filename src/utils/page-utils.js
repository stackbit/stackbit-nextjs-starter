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

function cssClassesFromFilePath(filePath) {
    const pathObject = path.parse(filePath);
    const cssClasses = [];
    const parts = pathObject.dir.split(path.sep).filter(Boolean);

    let css = 'page';
    parts.forEach((part) => {
        css += '-' + part;
        cssClasses.push(css);
    });
    cssClasses.push(`${css}-${pathObject.name}`);

    return cssClasses;
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
    cssClassesFromFilePath,
    flattenMarkdownData
};
