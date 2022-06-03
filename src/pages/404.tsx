import { Button, Center, Heading, LightMode, Text } from '@chakra-ui/react';
import { Hero } from 'components/HeroParts';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Hero.Background h="100vh" bgImage="/assets/error.jpg">
      <Center w="100%" h="100%" flexDir="column">
        <Heading as="h2" textTransform="uppercase" mb="2" textAlign="center">
          404 - Not Found
        </Heading>

        <Text fontSize="2xl" mb="4" align="center">
          You&apos;ve come far! let&apos;s go back to the home.
        </Text>

        <LightMode>
          <Link href="/">
            <Button
              colorScheme="whiteAlpha"
              _focus={{ outline: 'none' }}
              _focusVisible={{
                outline: 'none',
                ringColor: 'whiteAlpha.800',
                ring: 1,
                ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
                ringOffset: '0.2rem',
              }}
            >
              Go back home
            </Button>
          </Link>
        </LightMode>
      </Center>
    </Hero.Background>
  );
}
