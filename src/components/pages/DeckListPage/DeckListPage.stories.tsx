import { Meta, Story } from '@storybook/react';

import DeckListPage, { type DeckListPageProps } from './DeckListPage';

const meta: Meta = {
  title: 'Components/DeckListPage',
  component: DeckListPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DeckListPageProps> = (props) => <DeckListPage {...props} />;

export const Default = Template.bind({});
Default.args = {};
