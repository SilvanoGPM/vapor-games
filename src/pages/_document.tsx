import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { SplashScreen } from 'components/SplashScreen';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ overflow: 'hidden' }}>
        <ColorModeScript initialColorMode="dark" />
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
