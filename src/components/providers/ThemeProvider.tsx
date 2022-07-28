import {
  ChakraProvider,
  extendTheme,
  localStorageManager,
  type ThemeConfig,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};
