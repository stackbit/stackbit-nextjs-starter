import dynamic from 'next/dynamic';
import { registerComponents } from '@stackbit/components';
import { componentsMap } from '@stackbit/components/dist/components-map';
import '../css/main.css';

registerComponents({
    // Bring all Stackbit components
    ...componentsMap,

    // To override a "static" Stackbit component, set the Stackbit component's name to your custom component
    // For example, to override the "Action" component, import your CustomAction and set it to the "Action" key:
    // Action: CustomAction,

    // To override a "dynamic" Stackbit component, or to define a new dynamic component,
    // set the model name representing that component to your custom component:
    // For example, to override the "HeroSection" component, use next/dynamic to import your own component dynamically:
    // HeroSection: dynamic(() => import('../components/HeroSection')),
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
