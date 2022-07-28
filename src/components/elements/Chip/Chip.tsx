import { Box } from '@chakra-ui/react';

/** @pakcage */
export type ChipProps = {
  label: string;
};

/** @pakcage */
export const Chip = ({ label }: ChipProps) => (
  <Box fontSize={10} bg="ButtonFace" px={2.5} py={0.5} my="auto" borderRadius="xl">
    {label}
  </Box>
);
