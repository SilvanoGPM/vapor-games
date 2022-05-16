import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import { theme } from 'styles/theme';

import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Next Boilerplate</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="description" content="Boilerplate for NextJS projects" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>

      <NextNProgress
        color="#ffffff"
        startPosition={0.3}
        stopDelayMs={200}
        height={7}
      />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
