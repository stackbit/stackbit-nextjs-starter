# Stackbit Nextjs V2

A Nextjs page builder, component library and data fetcher.

## Quickstart

```
npm install
```

```
npm run dev
```


# How It Works
## Content

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

* This theme comes pre-configured to use `withStackbitComponents()` in the `next.config.js`

```js
// next.config.js

const withStackbitComponents = require('@stackbit/components/with-stackbit-components');

module.exports = withStackbitComponents({
  componentsMapPath: '.stackbit/components-map.json',
  ...
})
```

`withStackbitComponents` generates a dynamic import map for the Stackbit component library. This provides a framework to override existing Stackbit components and add your own new components. This approach reduces the bundle size by only importing components that are used.

* Generates `.stackbit/components-map.json` - Edit this file to override or add new components
* Generates `.stackbit/dynamic-components.js` - This file is dynamically generated from `components-map.json` and should not be edited or committed to git.

You can now use `getDynamicComponent(ComponentName)` in a Nextjs page. 

```
// src/pages/[[...slug]].js 
import { getDynamicComponent } from '@stackbit/components/components-registry';

function Page(props) {
  console.log(props);
  const { page, site } = props;
  const { layout } = page;

  const PageLayout = getDynamicComponent(layout);

  return <PageLayout page={page} site={site} />;
}
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
