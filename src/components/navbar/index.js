import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Button from '../button';
import CloseIcon from '../../svgs/close';
import HamburgerIcon from '../../svgs/hamburger';

export default function NavBar(props) {
    const primaryColors = props.primaryColors || 'colors-a';
    const width = props.width || 'full';
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';

    return (
        <nav
            className={classNames(primaryColors, 'px-4 py-5 lg:px-8', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                relative: mobileNavVariant === 'variant-b'
            })}
        >
            <Link href="#content">
                <a className="sr-only">Skip to main content</a>
            </Link>
            <div
                className={classNames('flex items-center', {
                    relative: mobileNavVariant === 'variant-a'
                })}
            >
                {desktopNavVariants(props)}
            </div>
        </nav>
    );
}

function desktopNavVariants(props) {
    const desktopNavVariant = props.desktopNavVariant || 'variant-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logoUrl;
    const logoAlt = props.logoAltText || '';
    const primaryLinks = props.primaryLinks;
    const secondaryLinks = props.secondaryLinks;

    if (desktopNavVariant === 'variant-a') {
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden ml-8 space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks)}</ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-b') {
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden absolute space-x-8 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto lg:flex lg:items-center">
                        {listOfLinks(primaryLinks)}
                    </ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-c') {
        const links = (primaryLinks || []).concat(secondaryLinks || []);
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {links.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks.concat(secondaryLinks))}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-d') {
        return (
            <>
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
                    {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                </div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks)}</ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    }
}

function mobileNavVariants(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const secondaryColors = props.secondaryColors || 'colors-a';
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logoUrl;
    const logoAlt = props.logoAltText || '';
    const primaryLinks = props.primaryLinks;
    const secondaryLinks = props.secondaryLinks;

    if (mobileNavVariant === 'variant-a') {
        return (
            <div className="ml-auto lg:hidden">
                <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                    <span className="sr-only">Open Menu</span>
                    <HamburgerIcon className="fill-current h-6 w-6" />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full z-10">
                        <div
                            className={classNames(secondaryColors, 'p-5 shadow-lg')}
                        >
                            <div className="flex items-center justify-between mb-6">
                                {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="p-2 -mt-2 -mr-2 focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <CloseIcon className="fill-current h-6 w-6" />
                                </button>
                            </div>
                            <ul className="space-y-5">{listOfLinks(primaryLinks.concat(secondaryLinks), true)}</ul>
                        </div>
                    </div>
                )}
            </div>
        );
    } else if (mobileNavVariant === 'variant-b') {
        return (
            <div className="ml-auto lg:hidden">
                <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                    <span className="sr-only">Open Menu</span>
                    <HamburgerIcon className="fill-current h-6 w-6" />
                </button>
                {isMenuOpen && (
                    <div>
                        <div
                            className="fixed inset-0 bg-base-900 bg-opacity-50"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div
                            className={classNames(secondaryColors, 'fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-md px-4 py-8 overflow-y-auto')}
                        >
                            <div className="flex items-center justify-between mb-6">
                                {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="p-2 -mt-2 -mr-2 focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <CloseIcon className="fill-current h-6 w-6" />
                                </button>
                            </div>
                            <ul className="space-y-5">{listOfLinks(primaryLinks.concat(secondaryLinks), true)}</ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

function siteLogoLink({ title, logo, logoAlt, isTitleVisible }) {
    return (
        <Link href="/">
            <a aria-label={title} title={title} className="inline-flex items-center">
                {logo && <img src={logo} alt={logoAlt} className={classNames({ 'mr-2': isTitleVisible })} />}
                {isTitleVisible && <span className="text-2xl font-medium tracking-wide">{title}</span>}
            </a>
        </Link>
    );
}

function listOfLinks(links, inMenu = false) {
    return links.map((link, idx) => (
        <li key={idx}>
            {(link.type === 'primary-button' || link.type === 'secondary-button') ? (
                <Button
                    label={link.label}
                    url={link.url}
                    alt={link.alt}
                    type={link.type}
                    icon={link.icon}
                    className={classNames(
                        inMenu ? 'w-full' : ''
                    )}
                />
            ) : (
                <Link href={link.url}>
                    <a
                        aria-label={link.alt}
                        title={link.alt}
                        className="tracking-wide transition-opacity duration-200 hover:opacity-80"
                    >
                        {link.label}
                    </a>
                </Link>
            )}
        </li>
    ));
}
