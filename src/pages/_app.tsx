import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';

import 'animate.css/animate.min.css';
import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';

import { theme } from 'styles/theme';
import { queryCient } from 'services/queryClient';
import { useSplashScreen } from 'hooks/useSplashScreen';

import SEO from '../../next-seo.config';

import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  useSplashScreen('hide');

  return (
    <SessionProvider>
      <QueryClientProvider client={queryCient}>
        <ChakraProvider theme={theme}>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/icons/apple-touch-icon.png"
            />

            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/icons/favicon-32x32.png"
            />

            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icons/favicon-16x16.png"
            />

            <link rel="manifest" href="/manifest.json" />

            <title>Vapor Games - Your favorite games in one place</title>

            <meta
              name="description"
              content="Vapor is a platform to list various information from various games."
            />

            <meta name="theme-color" content="#48b80f" />
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
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default App;
