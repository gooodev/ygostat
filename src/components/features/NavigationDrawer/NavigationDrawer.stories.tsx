import { Meta, Story } from '@storybook/react';

import { NavigationDrawer, type NavigationDrawerProps } from './NavigationDrawer';

const meta: Meta = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavigationDrawerProps> = (props: NavigationDrawerProps) => (
  <NavigationDrawer {...props} />
);

export const Default = Template.bind({});
Default.args = {};
