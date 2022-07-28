import { Meta, Story } from '@storybook/react';

import { LoginOutButton, type LoginOutButtonProps } from './LoginOutButton';

const meta: Meta = {
  title: 'Components/LoginOutButton',
  component: LoginOutButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LoginOutButtonProps> = (props) => <LoginOutButton {...props} />;

export const Default = Template.bind({});
Default.args = {};
