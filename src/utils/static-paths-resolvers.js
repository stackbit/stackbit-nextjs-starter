import { getAllPosts, getAllCategoryPostsSorted, generatePagedPathsForPage, getAllTagPostsSorted } from './data-utils';

export function resolveStaticPaths({ pages, objects }) {
    return pages.reduce((paths, page) => {
        const pageLayout = page.layout;
        const pageUrlPath = page.__metadata?.urlPath;
        if (pageLayout && StaticPathsResolvers[pageLayout]) {
            const resolver = StaticPathsResolvers[pageLayout];
            return paths.concat(resolver(page, objects));
        }
        return paths.concat(pageUrlPath);
    }, []);
}

const StaticPathsResolvers = {
    PostFeedLayout: (page, objects) => {
        const posts = getAllPosts(objects);
        const numOfPostsPerPage = page.numOfPostsPerPage || 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    PostCategoryLayout: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage || 10;
        const categoryPosts = getAllCategoryPostsSorted(objects, categoryId);
        return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
    },
    PostTagLayout: (page, objects) => {
        const tagId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage || 10;
        const tagPosts = getAllTagPostsSorted(objects, tagId);
        return generatePagedPathsForPage(page, tagPosts, numOfPostsPerPage);
    }
};
