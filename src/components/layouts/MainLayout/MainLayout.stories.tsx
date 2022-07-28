import { Meta, Story } from '@storybook/react';

import { MainLayout, type MainLayoutProps } from './MainLayout';

const meta: Meta = {
  title: 'Components/MainLayout',
  component: MainLayout,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MainLayoutProps> = (props: MainLayoutProps) => <MainLayout {...props} />;

export const Default = Template.bind({});
Default.args = {};
