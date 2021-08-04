import { registerDynamicComponents } from '@stackbit/components/components-registry';
import dynamicComponents from '../components/_dynamic_components';
import 'tailwindcss/tailwind.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Dynamic components are useful to reduce the bundled size of your site pages.
// They are used in places where a parent component, such as a page, can embed different types of child components.
// For example, a landing page that can use different types of section components. Or a hero section that can
// use one of multiple sub-components (image, video, etc.)
registerDynamicComponents({
  ...dynamicComponents,
  // add your own dynamic components here
});
