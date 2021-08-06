import React from 'react';
import Footer from './index';

export default {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <Footer {...args} />;

const args = {
    colors: 'colors-d',
    width: 'wide',
    title: 'Fish_of_the_day',
    isTitleVisible: true,
    logoUrl: '/images/logo.svg',
    logoAltText: 'Logo',
    info:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.  \nEaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    contacts: {
        phoneAlt: 'Our phone',
        phoneNumber: '850-123-5021',
        emailAlt: 'Our email',
        email: 'info@lorem.mail',
        addressAlt: 'Our address',
        address: '312 Lovely Street, NY'
    },
    copyrightText: '💖 powered by Stackbit',
    primaryLinks: [
        {
            label: 'About us',
            url: '/about',
            alt: 'About us'
        },
        {
            label: 'Product',
            url: '/',
            alt: 'Product'
        },
        {
            label: 'Features',
            url: '/',
            alt: 'Features'
        },
        {
            label: 'Pricing',
            url: '/',
            alt: 'Pricing'
        }
    ],
    socialLinks: [
        {
            label: 'Twitter',
            url: '/',
            icon: 'twitter'
        },
        {
            label: 'Instagram',
            url: '/',
            icon: 'instagram',
        },
        {
            label: 'Facebook',
            url: '/',
            icon: 'facebook',
        }
    ],
    legalLinks: [
        {
            label: 'F.A.Q',
            url: '/'
        },
        {
            label: 'Privacy Policy',
            url: '/'
        },
        {
            label: 'Terms & Conditions',
            url: '/'
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Footer';
Primary.args = args;

export const FooterNoContacts = Template.bind({});
FooterNoContacts.storyName = 'Footer Without Contacts';
FooterNoContacts.args = {
    ...args,
    colors: 'colors-b',
    width: 'full',
    logoUrl: '/images/logo-alt.svg',
    contacts: undefined
};

export const FooterNoLegal = Template.bind({});
FooterNoLegal.storyName = 'Footer Without Legal Links';
FooterNoLegal.args = {
    ...args,
    colors: 'colors-e',
    legalLinks: undefined
};
