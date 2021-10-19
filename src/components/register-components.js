import dynamic from 'next/dynamic';
import { registerComponents } from '@stackbit/components';
import { componentsMap } from '@stackbit/components/dist/components-map';

registerComponents({
  // Register all Stackbit components
  ...componentsMap,

  // Override any static or dynamic component,
  // or register your own dynamic component.
});

/**
 * README
 * ======
 *
 * The `registerComponents` function registers the received components with
 * components registry which is used internally by `@stackbit/components` package.
 * All registered components can be retrieved by calling the `getComponent` function.
 * The `@stackbit/components` package itself uses `getComponent` function to
 * retrieve and render registered components. This allows projects using the
 * `@stackbit/components` package to override any of its internal components by
 * registering a different components under the same key. Essentially, both
 * functions provide an "Inversion of control" programming pattern for managing
 * components.
 *
 * The registered components are divided into two groups - "static" and "dynamic".
 *
 * Static components are mapped by their names and are referenced directly. This
 * means that all static components are always included in your website's pages.
 * Therefore, static components will usually be small components which are
 * frequently used in website's pages. To override a static component, set its
 * name to your custom component:
 *
 *     import CustomAction from './CustomAction';
 *
 *     registerComponents({
 *       ...componentsMap,
 *       Action: CustomAction
 *     });
 *
 * Note: you don't need to register a new static component unless you are
 * overriding an existing static component from @stackbit/components.
 *
 * Dynamic components are mapped by model names and are referenced using Next's
 * dynamic imports. This ensures that dynamic components are loaded by the
 * browser only when these components are actually needed. You should use
 * dynamic components for large components or components with "heavy" external
 * dependencies which are used sparingly in your website's pages. To learn more
 * about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components are mapped by model names that describe the prop types of
 * these components. This is because the selection of a dynamic component at
 * run-time is based on the content's type, which is defined by the content's
 * model. For example, a parent component calls the `getComponent` function
 * passing it the type of the data it needs to render, and gets back the
 * component that was registered for that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 *
 * To override a dynamic component, or to define a new dynamic component, import
 * your component dynamically and set it to the key matching the model name
 * describing the input type of your component:
 *
 *     registerComponents({
 *       ...componentsMap,
 *       CtaSection: dynamic(() => import('./path/to/component'))
 *     });
 *
 * Note: in @stackbit/components package, model names match the components names.
 * For example, the props of the "HeroSection" component are described by a
 * model named "HeroSection".
 *
 * If you need to override a content models, copy the model from
 * node_modules/@stackbit/components/models folder to .stackbit/models folder.
 * Models defined in .stackbit/models folder take precedence over the models
 * with the same name defined in @stackbit/components.
 */
