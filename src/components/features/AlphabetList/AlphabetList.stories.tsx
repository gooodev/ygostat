import { Meta, Story } from '@storybook/react';

import { AlphabetList, type AlphabetListProps } from './AlphabetList';

const meta: Meta = {
  title: 'Components/AlphabetList',
  component: AlphabetList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AlphabetListProps<Record<string, unknown>, string>> = (props) => (
  <AlphabetList {...props} />
);

export const Default = Template.bind({});
Default.args = {};
