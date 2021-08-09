import React from 'react';
import Button from './index';

export default {
    title: 'Atoms/Button',
    component: Button
};

const Template = (args) => <Button {...args} />;

const args = {
    label: 'Stackbit',
    url: 'https://www.stackbit.com',
    alt: 'Stackbit',
    type: 'primary-button'
};

export const Primary = Template.bind({});
Primary.storyName = 'Primary button';
Primary.args = { ...args };

export const ButtonIcon = Template.bind({});
ButtonIcon.storyName = 'Secondary button with icon';
ButtonIcon.args = { ...args, type: 'secondary-button', icon: 'cart' };
