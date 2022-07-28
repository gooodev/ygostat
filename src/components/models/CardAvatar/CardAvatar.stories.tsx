import { Meta, Story } from '@storybook/react';

import { CardAvatar, type CardAvatarProps } from './CardAvatar';

const meta: Meta = {
  title: 'Components/CardAvatar',
  component: CardAvatar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CardAvatarProps> = (props: CardAvatarProps) => <CardAvatar {...props} />;

export const Default = Template.bind({});
Default.args = {};
