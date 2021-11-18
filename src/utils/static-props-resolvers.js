import { SignJWT } from 'jose/jwt/sign';
import crypto from 'crypto';

import {
    getRootPagePath,
    findObjectById,
    getAllPostsSorted,
    getAllCategoryPostsSorted,
    getAllTagPostsSorted,
    getPagedItemsForPage,
    mapObjectsById,
    mapDeepAsync
} from './data-utils';

export function resolveStaticProps(urlPath, data) {
    // get root path of paged path: /blog/page/2 => /blog
    const rootUrlPath = getRootPagePath(urlPath);
    const { __metadata, ...rest } = data.pages.find((page) => page.__metadata.urlPath === rootUrlPath);
    const props = {
        page: {
            __metadata: {
                ...__metadata,
                // override urlPath in metadata with paged path: /blog => /blog/page/2
                urlPath
            },
            ...rest
        },
        ...data.props
    };
    return mapDeepAsync(props, async (value, keyPath, stack) => {
        const objectType = value?.type || value?.layout;
        if (objectType && StaticPropsResolvers[objectType]) {
            const resolver = StaticPropsResolvers[objectType];
            return resolver(value, data, { keyPath, stack });
        }
        return value;
    });
}

const StaticPropsResolvers = {
    PostLayout: (props, data, debugContext) => {
        if (!props.author) {
            return props;
        }
        const author = findObjectById(props.author, data.objects, {
            keyPath: debugContext.keyPath.concat('author'),
            stack: debugContext.stack.concat(props)
        });
        return {
            ...props,
            author
        };
    },
    PostFeedLayout: (props, data) => {
        const numOfPostsPerPage = props.numOfPostsPerPage || 10;
        const allPosts = getAllPostsSorted(data.objects);
        const { items: posts, ...rest } = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
        return {
            ...props,
            ...rest,
            posts
        };
    },
    PostCategoryLayout: (props, data) => {
        const categoryId = props.__metadata?.id;
        const numOfPostsPerPage = props.numOfPostsPerPage || 10;
        const allCategoryPosts = getAllCategoryPostsSorted(data.objects, categoryId);
        const { items: posts, ...rest } = getPagedItemsForPage(props, allCategoryPosts, numOfPostsPerPage);
        return {
            ...props,
            ...rest,
            posts
        };
    },
    PostTagLayout: (props, data) => {
        const tagId = props.__metadata?.id;
        const numOfPostsPerPage = props.numOfPostsPerPage || 10;
        const allTagPosts = getAllTagPostsSorted(data.objects, tagId);
        const { items: posts, ...rest } = getPagedItemsForPage(props, allTagPosts, numOfPostsPerPage);
        return {
            ...props,
            ...rest,
            posts
        };
    },
    PostFeedSection: (props, data) => {
        const allPosts = getAllPostsSorted(data.objects);
        return {
            ...props,
            posts: allPosts.slice(0, props.recentCount || 6)
        };
    },
    FeaturedPostsSection: (props, data, debugContext) => {
        return {
            ...props,
            posts: mapObjectsById(props.posts, data.objects, {
                keyPath: debugContext.keyPath.concat('posts'),
                stack: debugContext.stack.concat(props)
            })
        };
    },
    FeaturedPeopleSection: (props, data, debugContext) => {
        return {
            ...props,
            people: mapObjectsById(props.people, data.objects, {
                keyPath: debugContext.keyPath.concat('people'),
                stack: debugContext.stack.concat(props)
            })
        };
    },
    FormBlock: async (props) => {
        if (!props.destination) {
            return props;
        }
        if (!process.env.STACKBIT_CONTACT_FORM_SECRET) {
            console.error(`No STACKBIT_CONTACT_FORM_SECRET provided. It will not work properly for production build.`);
            return props;
        }
        const secretKey = crypto.createHash('sha256').update(process.env.STACKBIT_CONTACT_FORM_SECRET).digest();
        const destination = new SignJWT({ email: props.destination }).setProtectedHeader({ alg: 'HS256' }).sign(secretKey);
        return {
            ...props,
            destination
        };
    }
};
