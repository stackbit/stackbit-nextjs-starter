import React from 'react';
import Advanced from './index';

import * as CTASectionStories from '../../components/cta-section/cta-section.stories';
import * as NavBarStories from '../../components/navbar/navbar.stories';
import * as FooterStories from '../../components/footer/footer.stories';
import * as ContactSectionStories from '../../components/contact-section/contact-section.stories';
import * as HeroSectionStories from '../../components/hero-section/hero-section.stories';
import * as PostsSectionStories from '../../components/posts-section/posts-section.stories';
import * as TestimonialsSectionStories from '../../components/testimonials-section/testimonials-section.stories';

export default {
    title: 'Layouts/Advanced Page',
    component: Advanced
};

const Template = (args) => <Advanced {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Advanced Page';
Primary.args = {
    page: {
        title: 'Example Page',
        sections: [
            HeroSectionStories.Primary.args,
            TestimonialsSectionStories.Primary.args,
            PostsSectionStories.Primary.args,
            CTASectionStories.Primary.args,
            ContactSectionStories.Primary.args
        ]
    },
    siteConfig: {
        ...NavBarStories.Primary.args,
        ...FooterStories.Primary.args
    }
};
