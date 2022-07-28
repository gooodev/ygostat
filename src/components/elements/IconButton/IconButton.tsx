import {
  IconButton as ChakraIconButton,
  type IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/react';

export type IconButtonProps = Omit<ChakraIconButtonProps, 'bgColor' | 'borderRaius' | 'fontSize'>;

/** @package */
export const IconButton = (props: IconButtonProps) => {
  return <ChakraIconButton bgColor="transparent" borderRadius="full" fontSize="xl" {...props} />;
};
