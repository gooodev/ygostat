import { Meta, Story } from '@storybook/react';

import { IconButton, IconButtonProps } from './IconButton';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconButtonProps> = (props) => <IconButton {...props} />;

export const Default = Template.bind({});
Default.args = {};
