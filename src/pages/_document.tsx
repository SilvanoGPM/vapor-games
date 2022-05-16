import { Html, Head, Main, NextScript } from 'next/document';
import { Box, ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode="system" />
        <Box maxW="1400px" m="auto">
          <Main />
        </Box>
        <NextScript />
      </body>
    </Html>
  );
}
