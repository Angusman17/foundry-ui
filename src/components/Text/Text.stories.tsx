import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon from '@mdi/react';
import * as Icons from '@mdi/js';

import Text, { TextProps } from './Text';
import colors from '../../enums/colors';

const options = {
  none: '',
  ...Icons,
};

type DefaultProps = TextProps & {
  iconPrefix: string;
  iconSuffix: string;
};

export const Default: Story<DefaultProps> = ({ iconPrefix, iconSuffix, ...args }: DefaultProps) => {
  const getIconPath = (path: string) => (path ? <Icon size={args.size} path={path} /> : undefined);

  return (
    <Text {...args} iconPrefix={getIconPath(iconPrefix)} iconSuffix={getIconPath(iconSuffix)} />
  );
};
Default.args = {
  size: '1rem',
  color: colors.grayDark,
  iconPrefix: 'mdiComment',
  iconSuffix: 'mdiComment',
  isProcessing: false,
  isLoading: false,
  children: 'Lorem ipsum dolor sit amet.',
};

const iconOptions = {
  options: Object.keys(options),
  mapping: options,
  control: {
    type: 'select',
  },
};

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    iconPrefix: iconOptions,
    iconSuffix: iconOptions,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3r2G00brulOwr9j7F6JF59/Generic-UI-Style?node-id=83%3A17',
    },
  },
} as Meta;
