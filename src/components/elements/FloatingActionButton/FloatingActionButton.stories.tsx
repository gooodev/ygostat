import { Meta, Story } from '@storybook/react';

import { FloatingActionButton, FloatingActionButtonProps } from './FloatingActionButton';

const meta: Meta = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FloatingActionButtonProps> = (props: FloatingActionButtonProps) => (
  <FloatingActionButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
