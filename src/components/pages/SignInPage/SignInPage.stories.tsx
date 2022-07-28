import { Meta, Story } from '@storybook/react';

import SignInPage, { type SignInPageProps } from './SignInPage';

const meta: Meta = {
  title: 'Components/SignInPage',
  component: SignInPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SignInPageProps> = (props) => <SignInPage {...props} />;

export const Default = Template.bind({});
Default.args = {};
