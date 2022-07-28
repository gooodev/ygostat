import { Meta, Story } from '@storybook/react';

import { Chip, ChipProps } from './Chip';

const meta: Meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ChipProps> = (props) => <Chip {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Hello',
};
