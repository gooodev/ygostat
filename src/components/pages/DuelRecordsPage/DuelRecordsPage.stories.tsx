import { Meta, Story } from '@storybook/react';

import DuelRecordsPage, { type DuelRecordsPageProps } from './DuelRecordsPage';

const meta: Meta = {
  title: 'Components/DuelRecordsPage',
  component: DuelRecordsPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DuelRecordsPageProps> = (props) => <DuelRecordsPage {...props} />;

export const Default = Template.bind({});
Default.args = {};
