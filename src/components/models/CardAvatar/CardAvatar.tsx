import { Box, Image } from '@chakra-ui/react';

/** @pakcage */
export type CardAvatarProps = {
  src: string;
};

/** @pakcage */
export const CardAvatar = ({ src }: CardAvatarProps) => (
  <Box w={14} h={14} borderRadius="full" overflow="hidden" position="relative">
    <Image src={src} maxW={20} position="absolute" top={-6} left={-3} />
  </Box>
);
