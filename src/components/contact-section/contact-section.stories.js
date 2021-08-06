import React from 'react';
import ContactSection from './index';

export default {
    title: 'Components/Contact Section',
    component: ContactSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'contact_section',
    variant: 'variant-b',
    colors: 'colors-e',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    title: 'Join our club',
    text: 'We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.',
    imageUrl: '/images/lobster.jpg',
    imageAltText: 'Fisherman holding lobster',
    formId: 'contact-form',
    formFields: [
        {
            inputType: 'text',
            name: 'name',
            label: 'Name',
            defaultValue: 'Your name',
            isRequired: true,
            width: '1/2'
        },
        {
            inputType: 'email',
            name: 'email',
            label: 'Email',
            defaultValue: 'Your email',
            isRequired: true,
            width: '1/2'
        },
        {
            inputType: 'text',
            name: 'home-address',
            label: 'Home address',
            defaultValue: 'Your home address',
            isRequired: true,
            width: 'full'
        },
        {
            inputType: 'checkbox',
            name: 'updates',
            label: 'Sign me up to receive updates',
            width: 'full'
        }
    ],
    submitLabel: 'Send Message'
};

export const Primary = Template.bind({});
Primary.storyName = 'Contact Section With Left Image';
Primary.args = args;

export const ContactRightImage = Template.bind({});
ContactRightImage.storyName = 'Contact Section With Right Image';
ContactRightImage.args = {
    ...args,
    variant: 'variant-a',
    colors: 'colors-b',
    alignHoriz: 'center',
    title: 'Join our **club**',
    formFields: [
        {
            inputType: 'text',
            name: 'name',
            label: 'Name',
            defaultValue: 'Your name',
            isRequired: true,
            width: 'full'
        },
        {
            inputType: 'email',
            name: 'email',
            label: 'Email',
            defaultValue: 'Your email',
            isRequired: true,
            width: 'full'
        },
        {
            inputType: 'text',
            name: 'home-address',
            label: 'Home address',
            defaultValue: 'Your home address',
            isRequired: true,
            width: 'full'
        },
        {
            inputType: 'select',
            name: 'select-box',
            label: 'Select example',
            defaultValue: 'Please choose...',
            isRequired: true,
            options: [
                'Option 1',
                'Option 2'
            ],
            width: 'full'
        },
        {
            inputType: 'checkbox',
            name: 'updates',
            label: 'Sign me up to receive updates',
            width: 'full'
        }
    ],
};
