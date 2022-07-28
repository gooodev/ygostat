import { Meta, Story } from '@storybook/react';

import LandingPage, { type LandingPageProps } from './LandingPage';

const meta: Meta = {
  title: 'Components/LandingPage',
  component: LandingPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LandingPageProps> = (props) => <LandingPage {...props} />;

export const Default = Template.bind({});
Default.args = {};
