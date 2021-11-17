export function getAllPostsSorted(objects) {
    const allPosts = getAllPosts(objects);
    return sortPosts(allPosts);
}

export function getAllCategoryPostsSorted(objects, categoryId) {
    const allPosts = getAllPosts(objects);
    const categoryPosts = allPosts.filter((post) => post.category === categoryId);
    return sortPosts(categoryPosts);
}

export function getAllTagPostsSorted(objects, tagId) {
    const allPosts = getAllPosts(objects);
    const tagPosts = allPosts.filter((post) => post.tags.includes(tagId));
    return sortPosts(tagPosts);
}

export function getAllPosts(objects) {
    return objects.filter((object) => object.layout === 'PostLayout');
}

export function sortPosts(posts) {
    return posts.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
}

export function mapObjectsById(objectIds, objects, debugContext) {
    return (objectIds ?? [])
        .map((objectId, index) =>
            findObjectById(objectId, objects, {
                keyPath: debugContext.keyPath.concat(index),
                stack: debugContext.stack.concat([objectIds])
            })
        )
        .filter(Boolean);
}

export function findObjectById(objectId, objects, debugContext) {
    if (!objectId) {
        return null;
    }
    const object = objects.find((object) => object.__metadata?.id === objectId) || null;
    if (!object && debugContext) {
        const reverseStack = debugContext.stack.slice().reverse();
        const objectIndex = reverseStack.findIndex((object) => !!object.__metadata?.relProjectPath);
        if (objectIndex >= 0) {
            const filePath = reverseStack[objectIndex].__metadata.relProjectPath;
            const fieldPath = debugContext.keyPath
                .slice()
                .reverse()
                .slice(0, objectIndex + 1)
                .reverse()
                .join('.');
            console.warn(`The '${objectId}' referenced in file '${filePath}' in field '${fieldPath}' was not found`);
        }
    }
    return object;
}

export function getRootPagePath(pagePath) {
    const pagedPathMatch = pagePath.match(/\/page\/\d+$/);
    if (!pagedPathMatch) {
        return pagePath;
    }
    return pagePath.substring(0, pagedPathMatch.index);
}

export function generatePagedPathsForPage(page, items, numOfItemsPerPage) {
    const pageUrlPath = page.__metadata?.urlPath;
    const numOfPages = Math.ceil(items.length / numOfItemsPerPage) || 1;
    const paths = [];
    for (let i = 0; i < numOfPages; i++) {
        paths.push(i === 0 ? pageUrlPath : `${pageUrlPath}/page/${i + 1}`);
    }
    return paths;
}

export function getPagedItemsForPage(page, items, numOfItemsPerPage) {
    const pageUrlPath = page.__metadata?.urlPath;
    const pageIndexMatch = pageUrlPath.match(/\/page\/(\d+)$/);
    const pageIndex = pageIndexMatch ? parseInt(pageIndexMatch[1]) - 1 : 0;
    const numOfPages = Math.ceil(items.length / numOfItemsPerPage) || 1;
    return {
        pageIndex,
        numOfPages: numOfPages,
        numOfTotalItems: items.length,
        items: items.slice(pageIndex, pageIndex + numOfItemsPerPage)
    };
}

export async function mapDeepAsync(value, iteratee) {
    async function _mapDeep(value, keyPath, stack) {
        value = await iteratee(value, keyPath, stack);
        const childrenIterator = (val, key) => {
            return _mapDeep(val, keyPath.concat(key), stack.concat([value]));
        };
        if (value && typeof value == 'object' && value.constructor === Object) {
            const res = {};
            for (const [key, val] of Object.entries(value)) {
                res[key] = await childrenIterator(val, key);
            }
            value = res;
        } else if (Array.isArray(value)) {
            value = await Promise.all(value.map(childrenIterator));
        }
        return value;
    }
    return _mapDeep(value, [], []);
}
