import { extendTheme } from '@chakra-ui/react';
import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode('#ffffff', '#121212')(props),
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
      },
    }),
  },
});
