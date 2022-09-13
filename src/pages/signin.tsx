import { Button, Center, VStack, Icon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';

import {
  signIn,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
  getSession,
} from 'next-auth/react';

import { useRouter } from 'next/router';
import { BiHome } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

interface SignInProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const providersIcons = {
  google: FcGoogle,
};

export default function SignIn({ providers }: SignInProps) {
  const { push } = useRouter();

  return (
    <Center minH="100vh" w="full" px="2">
      <VStack>
        {Object.values(providers || {}).map((provider) => {
          const key = provider.id as keyof typeof providersIcons;

          const icon = providersIcons[key];

          return (
            <Button
              key={key}
              leftIcon={<Icon as={icon} />}
              size="lg"
              minW={['200px', '250px', '300px']}
              onClick={() => signIn(provider.id)}
            >
              Login with {provider.name}
            </Button>
          );
        })}

        <Button
          leftIcon={<Icon as={BiHome} />}
          size="lg"
          minW={['200px', '250px', '300px']}
          onClick={() => push('/')}
        >
          Go to Home
        </Button>
      </VStack>
    </Center>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const providers = await getProviders();

  const session = await getSession({ req });

  if (session) {
    return {
      props: {},
      redirect: { destination: '/' },
    };
  }

  return {
    props: { providers },
  };
};
