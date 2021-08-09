import { registerDynamicComponents } from '@stackbit/components/components-registry';
import dynamic from 'next/dynamic';

// To dynamically import a component in your code, import the 'getDynamicComponent'
// method from '@stackbit/components/components-registry' and call it with the
// component's registration key. The key should be the model name, which is
// stored with every object inside 'type' field.

// Dynamically imported components are used in places where a parent component
// can contain different types of child components, and are useful to reduce the
// bundle size of your site pages: https://nextjs.org/docs/advanced-features/dynamic-import
// For example, a landing page component that can contain different types of
// section components. In this case, instead of importing a static map of all
// available section components, effectively including them in the page bundle,
// it is suggested to use a map of dynamic components and load each of them
// on demand.
registerDynamicComponents({
  // Add your dynamically imported components here. Your components will be
  // merged with dynamic components defined in @stackbit/components/dynamic-components.js.
  // the key should be the model name that is stored inside content as the 'type' attribute.
  new_section: dynamic(() => import('./components/NewSection'))
});
