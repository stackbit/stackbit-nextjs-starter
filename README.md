# Stackbit Nextjs V2
## Quickstart

A Nextjs page builder, component library and data fetcher.

```
npm install
```

```
npm run dev
```


# How It Works
## Content

### Fetching Content

Content is sourced from the filesystem using [Sourcebit](https://github.com/stackbit/sourcebit). It loads markdown and json files stored in `content/pages` and `content/data` and tranforms them into page objects which are used by `getStaticProps()`. 

* This theme comes with a pre-configured sourcebit config `sourcebit.js`
* This theme comes pre-configured to use `sourcebit.fetch()` in the `next.config.js`


```js
// next.config.js

const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
  ...
}
```

Whenever you run `npm run dev` or `npm run build` Sourcebit fetches content and outputs the `.sourcebit-nextjs-cache.json` file which contains an array of page objects. 

Inside a Nextjs page route like `src/pages/[[...slug]].js` you can load page data by it's path using the `sourcebitDataClient.getStaticPropsForPageAtPath(path)` function inside of `getStaticProps`

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