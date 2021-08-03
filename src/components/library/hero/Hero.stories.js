import React from 'react';
import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  args: {
    heading: 'Want to learn more?',
    subHeading: 'Signup for our mailing list to stay updated',
    image: 'https://source.unsplash.com/jOF2TFSNxQI/1600x900/',
    buttons: [],
    variant: 'hero1',
  },
  argTypes: {
    variant: {
      options: ['hero1', 'hero2', 'hero3', 'hero7'],
      control: { type: 'select' },
    },
    fields: { table: { expanded: true } },
  },
};

const Template = (args) => {
  const { heading, subHeading, image, buttons } = args;
  const fields = {
    heading,
    subHeading,
    image,
    buttons,
  };
  const { variant } = args;
  return <Hero fields={fields} variant={variant} />;
};

export const HeroLeft = Template.bind({});
export const HeroRight = Template.bind({});
HeroRight.args = {
  variant: 'hero2',
};
