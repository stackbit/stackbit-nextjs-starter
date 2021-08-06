import React from 'react';
import ImageBlock from './index';

export default {
    title: 'Atoms/Image Block',
    component: ImageBlock
};

const Template = (args) => <ImageBlock {...args} />;

const args = {
    type: 'image_block',
    imageUrl: '/images/fisherman.jpg',
    imageAltText: 'Image alt text',
    imageCaption: 'Image caption'
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
