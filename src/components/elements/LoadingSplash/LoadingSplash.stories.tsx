import { Meta, Story } from '@storybook/react';

import { LoadingSplash, type LoadingSplashProps } from './LoadingSplash';

const meta: Meta = {
  title: 'Components/LoadingSplash',
  component: LoadingSplash,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LoadingSplashProps> = (props: LoadingSplashProps) => (
  <LoadingSplash {...props} />
);

export const Default = Template.bind({});
Default.args = {};
