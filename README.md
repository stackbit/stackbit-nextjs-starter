# Stackbit Nextjs V2

The NextJs core starter for Stackbit.

## Quickstart

```
npm install
```

```
npm run dev
```

### Add a new page

Create a new markdown file `content/pages/new-page.md` with the following frontmatter.

```yaml
---
title: "New Example Page"
layout: "AdvancedLayout"
sections:
  - type: "HeroSection"
    variant: "variant-a"
    width: "wide"
    height: "auto"
    alignHoriz: "left"
    badge: "Brand New"
    title: "My Heading"
    text: "a long description"
    actions:
      - type: "Button"
        url: "/"
        label: "Home"
        style: "primary"
    feature:
      type: "ImageBlock"
      imageUrl: "/images/hero.png"
      imageAltText: "Image alt text"
      imageCaption: "Image caption"
---
```

Visit http://localhost:3000/new-page/ to see the new page.

> **Note:** The pages url will match the file path - `content/pages/new-page.md` will resolve to _/new-page_. A nested folder like `content/pages/blog/index.md` will resolve to _/blog/_

### Add a menu item

Menu items are configured in `content/data/config.json`. Edit the config file and add a new menu object to the `primaryLinks` array.

```js
// content/data/config.json
{
  "navBar": {
    // ...
    "primaryLinks": [
      // ...
      {
        "type": "Link",
        "label": "My New Page",
        "url": "/new-page",
        "altText": ""
      }
    ],
    // ...
  }
}
```

### Adding more sections to the page

Add a [🧩 CtaSection](https://components.stackbit.com/?path=/docs/components-contactsection--primary) to the page by adding the component to the the sections array.

```yaml
# content/pages/new-page.md
---
title: "New Example Page"
layout: "AdvancedLayout"
sections: # sections array
  - type: "HeroSection"
    # ...
  - type: "CtaSection"
    variant: "variant-a"
    width: "wide"
    height: "auto"
    alignHoriz: "center"
    title: "Let's do this"
    text: "The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen."
    actions:
      - type: "Button"
        url: "/contact"
        label: "Get Started"
        style: "primary"
---
```


**Component Library:** The [Stackbit Component Library](https://develop--stackbit-components.netlify.app/?path=/story/layouts-advancedlayout--primary) has full documentation on each component including the available props and frontmatter.


 **Component Examples**

  - [🧩 CtaSection](https://components.stackbit.com/?path=/docs/components-contactsection--primary)
  - [🧩 ContactSection](https://components.stackbit.com/?path=/docs/components-contentsection--primary)
  - [🧩 FeaturedPeopleSection](https://components.stackbit.com/?path=/docs/components-featuredpeoplesection--primary)
  - [🧩 FeaturedPostsSection](https://components.stackbit.com/?path=/docs/components-featuredpostssection--primary)

### Adding your own components

In this example we will create a new component that displays a grid of logos.

Create a new react component in `src/components/LogoSection.js`

```js
import React from 'react';

const LogoSection = (props) => {
  const { logos, title } = props;
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 lg:py-20 mt-10 mb-10 text-center">
      <h1 className="text-3xl tracking-tight sm:text-4xl mb-2">{title}</h1>
      <div className="flex justify-center items-center">
        {logos.map((logo, index) => (
          <div className="p-6" key={index}>
            <img className="mb-2" height="60px" width="60px" src={logo.image} />
            <h2 className="text-sm text-gray-400">{logo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
```

Register the component in `.stackbit/components-map.json`

```js
{
    "README": "Components set to 'null' will be loaded from @stackbit/components library. To override a component, set it to relative paths of your component",
    "components": {
        "Action": null,
        ...
        "LogoSection": "../src/components/LogoSection.js"
    },
    "dynamic": {
        "CheckboxFormControl": "@stackbit/components/components/CheckboxFormControl",
        ...
        "LogoSection": "../src/components/LogoSection.js"
    }
}
```

Add a new model for the `LogoSection` component. Create a new model file at `.stackbit/models/LogoSection.yml`

```yml
type: object
name: LogoSection
label: Logo section
fields:
  - type: string
    name: title
  - type: list
    name: logos
    items:
      type: object
      fields:
        - type: string
          name: name
        - type: image
          name: image
```

Extend the [🧩 AdvancedLayout](https://components.stackbit.com/?path=/docs/layouts-advancedlayout--primary) model. Open the model file at `.stackbit/models/AdvancedLayout.yml`

```yml
type: page
name: AdvancedLayout
label: Advanced page
layout: AdvancedLayout
hideContent: true
fields:
  - type: string
    name: title
    label: Title
  - type: list
    name: sections
    label: Sections
    items:
      type: model
      models:
        - ContactSection
        ...
        - LogoSection
```

Add the component to the homepage content. Edit `content/pages/index.md`

```yml
---
title: Home
layout: AdvancedLayout
sections:
  - type: HeroSection
    ...
  - type: LogoSection
    title: "Our Partners"
    logos:
      - name: 'Stackbit'
        image: '/images/stackbit.svg'
      - name: 'NextJs'
        image: '/images/nextdotjs.svg'
---
```

Download the images and place them in the `/public/images/` folder.
* https://simpleicons.org/icons/stackbit.svg
* https://simpleicons.org/icons/nextdotjs.svg

### Extending a Stackbit component

In this example we will extend an existing Stackbit component.

### Understanding Layouts

Explain how layouts work.

* How does the `layout` field work?
* How does the `layout` field effect which frontmatter fields can be used?
* The layout is both a component and a model. Explain this concept.

### Editing the CSS

You can edit the tailwind config in `tailwind.config.js`

The Stackbit component library includes a number of Tailwind preset configurations which will dramatically change the themes look and feel.

* [@stackbit/components/themes/tailwind.bold.config.js](https://github.com/stackbit/stackbit-components/blob/main/themes/tailwind.bold.config.js)
* [@stackbit/components/themes/tailwind.eco.config.js](https://github.com/stackbit/stackbit-components/blob/main/themes/tailwind.eco.config.js)
* [@stackbit/components/themes/tailwind.modern.config.js](https://github.com/stackbit/stackbit-components/blob/main/themes/tailwind.modern.config.js)
* [@stackbit/components/themes/tailwind.retro.config.js](https://github.com/stackbit/stackbit-components/blob/main/themes/tailwind.retro.config.js)

Use the `presets` option to change the configuration.

```js
// tailwind.config.js
module.exports = {
  presets: [require('@stackbit/components/themes/tailwind.bold.config')],
  // ...
}
```

#### Changing the primary color

```js
module.exports = {
  ...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#207bea',
        secondary: '#FFF7E3',
        base: '#262626',
        'complimentary-1': '#e8f3ee',
        'complimentary-2': '#e2e4ff',
        info: '#EA5234'
      }
    }
  },
  ...
};
```

#### Changing a color palette

```js
module.exports = {
  ...
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addComponents({
        '.colors-e': {
          '@apply bg-red-500 text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-base border-base text-white hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-60 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        }
      });
    })
  ]
};
```

