import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'styles/theme';

import SEO from '../../next-seo.config';

import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/icons/android-chrome-512x512.png"
        />

        <link rel="manifest" href="/manifest.json" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <title>Vapor Games</title>

        <meta
          name="description"
          content="Vapor é uma plataforma para listar diversas informações de vários jogos."
        />

        <meta name="theme-color" content="#121212" />
      </Head>

      <DefaultSeo {...SEO} />

      <NextNProgress
        color="#48b80f"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
