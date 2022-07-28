import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

/** @pakcage */
export type FloatingActionButtonProps = {
  fabIcon: ReactElement;
};

/** @pakcage */
export const FloatingActionButton = ({ fabIcon }: FloatingActionButtonProps) => (
  <IconButton
    aria-label="add result"
    icon={fabIcon}
    position="fixed"
    w={16}
    h={16}
    bottom={10}
    right={10}
    borderRadius="full"
    shadow="md"
    bgColor="ButtonHighlight"
    fontSize={20}
  />
);
