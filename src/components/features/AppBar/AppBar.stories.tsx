import { Meta, Story } from '@storybook/react';

import { AppBar, type AppBarProps } from './AppBar';

const meta: Meta = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AppBarProps> = (props) => <AppBar {...props} />;

export const Default = Template.bind({});
Default.args = {};
