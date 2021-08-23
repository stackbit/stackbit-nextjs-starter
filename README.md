# Stackbit Nextjs V2

A Nextjs page builder, component library and data fetcher.

```
npm install
```

```
npm run dev
```


# Docs
## Content

### Fetching Content

Content is sourced from the filesystem using [Sourcebit](https://github.com/stackbit/sourcebit). It loads markdown and json files stored in `content/pages` and `content/data` and tranforms them into page objects which are used by `getStaticProps()`. 

This theme comes with a pre-configured sourcebit config in `sourcebit.js`

Require `sourcebit` in your `next.config.js` and execute the `sourcebit.fetch(sourcebitConfig)` method.

This theme comes pre-configured to use `sourcebit.fetch()`


> You can also use the sourcebit cli to fetch content: `npx sourcebit fetch`


```js
// next.config.js

const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
  ...
}
```

After sourcebit fetches the data it outputs the `.sourcebit-nextjs-cache.json` file which contains and array of page objects. 

### Loading content

Inside nextjs page routes ie `src/pages/[[...slug]].js`, you can load page data by it's path using `sourcebitDataClient.getStaticPropsForPageAtPath(path)` inside of `getStaticProps`

```js
// src/pages/[[...slug]].js

export async function getStaticProps({ params }) {
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);
  return { props };
}
```

## Components

This theme uses the [Stackbit component library](https://github.com/stackbit/stackbit-components) 

```
npm install @stackbit/components
```

Wrap your nextjs config with `withStackbitComponents()`

```js
// next.config.js

const withStackbitComponents = require('@stackbit/components/with-stackbit-components');

module.exports = withStackbitComponents({
  componentsMapPath: '.stackbit/components-map.json',
  ...
})
```
## Tailwind

You can edit the tailwind config in `tailwind.config.js`

The Stackbit component library includes a number of preset Tailwind themes which you can use.

```js
// tailwind.config.js

module.exports = {
  presets: [require('@stackbit/components/themes/tailwind.bold.config')],
  mode: 'jit',
}
```