import React from 'react';
import HeroSection from './index';

export default {
    title: 'Components/Hero Section',
    component: HeroSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
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

const Template = (args) => <HeroSection {...args} />;

const args = {
    type: 'hero_section',
    variant: 'variant-a',
    colors: 'colors-d',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    badge: 'New Collaboration',
    title: 'The quick, brown fox  \njumps over **a lazy dog**',
    text:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    actions: [
        {
            url: '#',
            label: 'Apply Now',
            type: 'primary-button'
        },
        {
            url: '#',
            label: 'Learn more',
            type: 'secondary-button'
        }
    ],
    feature: {
        type: 'image_block',
        imageUrl: '/images/hero.png',
        imageAltText: 'Image alt text',
        imageCaption: 'Image caption'
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section With Image on the Right';
Primary.args = args;

export const HeroLeftVideo = Template.bind({});
HeroLeftVideo.storyName = 'Hero Section With Video on the Left';
HeroLeftVideo.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-b',
    width: 'full',
    badge: 'Brand new',
    actions: [
        {
            url: '#',
            label: 'Get started',
            type: 'primary-button',
        }
    ],
    feature: {
        type: 'video_block',
        videoUrl: '/videos/stackbit-for-marketers.mp4',
        posterUrl: '/images/stackbit-for-marketers.jpg',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
    }
};

export const HeroBottomImage = Template.bind({});
HeroBottomImage.storyName = 'Hero Section With Image at the Bottom';
HeroBottomImage.args = {
    ...args,
    variant: 'variant-d',
    colors: 'colors-b',
    width: 'full',
    alignHoriz: 'center',
    badge: 'Brand new',
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            url: '#',
            label: 'Get started',
            type: 'primary-button',
        }
    ],
    feature: {
        type: 'image_block',
        imageUrl: '/images/hero-alt.png',
        imageAltText: 'Image alt text',
        imageCaption: 'Image caption'
    }
};

export const HeroTextOnly = Template.bind({});
HeroTextOnly.storyName = 'Hero Section With Text Only';
HeroTextOnly.args = {
    ...args,
    variant: 'variant-a',
    colors: 'colors-e',
    badge: null,
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            url: '#',
            label: 'Start Shopping',
            type: 'primary-button',
            icon: 'cart'
        },
        {
            url: '#',
            label: 'Get 15% discount',
            type: 'link',
            icon: 'arrowRight'
        }
    ],
    feature: null
};
