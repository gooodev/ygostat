import { Meta, Story } from '@storybook/react';

import DeckDetailPage, { type DeckDetailPageProps } from './DeckDetailPage';

const meta: Meta = {
  title: 'Components/DeckDetailPage',
  component: DeckDetailPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DeckDetailPageProps> = (props) => <DeckDetailPage {...props} />;

export const Default = Template.bind({});
Default.args = {};