import 'tailwindcss/tailwind.css';
import { registerDynamicComponents } from '@stackbit/components/components-registry';
import components from '../../.stackbit/dynamic-components';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

registerDynamicComponents(components)
