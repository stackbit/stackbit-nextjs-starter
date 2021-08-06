import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Link from 'next/link';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';


export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'full';
    const iconMap = {
        facebook: Facebook,
        github: GitHub,
        instagram: Instagram,
        linkedin: LinkedIn,
        twitter: Twitter
    };

    return (
        <footer
            className={classNames(colors, 'px-4 py-12 lg:px-8 lg:py-16', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow'
            })}
        >
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {((props.title && props.isTitleVisible) || props.logoUrl) && (
                    <div className="sm:col-span-2">
                        <Link href="/">
                            <a aria-label="Go home" title={props.title} className="">
                                {props.logoUrl && <img src={props.logoUrl} alt={props.logoAltText} className="mb-2" />}
                                {props.isTitleVisible && <div className="mb-2 font-medium text-2xl tracking-wide">{props.title}</div>}
                            </a>
                        </Link>
                        {props.info && (
                            <div className="mt-6 lg:max-w-sm">
                                <Markdown>{props.info}</Markdown>
                            </div>
                        )}
                    </div>
                )}
                {props.primaryLinks && props.primaryLinks.length > 0 && (
                    <div>
                        <ul className="space-y-6">
                            {props.primaryLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a key={idx} href={link.url} className="hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {((props.socialLinks && props.socialLinks.length > 0) || props.contacts) && (
                    <div>
                        {props.socialLinks && props.socialLinks.length > 0 && (
                            <ul className="flex items-center mb-6 space-x-6">
                                {props.socialLinks.map((link, idx) => {
                                    const IconComponent = iconMap[link.icon];
                                    if (!IconComponent) {
                                        return null;
                                    }
                                    return (
                                        <li key={idx}>
                                            <Link href={link.url}>
                                                <a
                                                    aria-label={link.alt}
                                                    title={link.alt}
                                                    className="transition-opacity duration-300 hover:opacity-80"
                                                >
                                                    {link.label && <span className="sr-only">{link.label}</span>}
                                                    <IconComponent className="fill-current h-6 w-6" />
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {props.contacts && <Contacts {...props.contacts} />}
                    </div>
                )}
            </div>
            <hr />
            <div
                className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
                {props.copyrightText && <p className="text-sm">{props.copyrightText}</p>}
                {props.legalLinks && props.legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        {props.legalLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className="text-sm hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="space-y-4">
            {props.phoneNumber && (
                <p>
                    <a href={`tel:${props.phoneNumber}`} aria-label={props.phoneAlt} title={props.phoneAlt} className="hover:underline">
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a href={`mailto:${props.email}`} aria-label={props.emailAlt} title={props.emailAlt} className="hover:underline">
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={props.addressAlt}
                        title={props.addressAlt}
                        className="hover:underline"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}
