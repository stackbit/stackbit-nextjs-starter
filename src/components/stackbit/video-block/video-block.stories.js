import React from 'react';
import VideoBlock from './index';

export default {
    title: 'Atoms/Video Block',
    component: VideoBlock
};

const Template = (args) => <VideoBlock {...args} />;

const args = {
    type: 'video_block',
    videoUrl: '/videos/stackbit-for-marketers.mp4',
    posterUrl: '/images/stackbit-for-marketers.jpg',
    controls: true
};

export const Primary = Template.bind({});
Primary.storyName = 'Video';
Primary.args = { ...args };
