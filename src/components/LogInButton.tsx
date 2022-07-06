import { useBreakpointValue } from '@chakra-ui/react';
import { RiGoogleFill } from 'react-icons/ri';
import { ResponsiveButton } from './ResponsiveButton';

import { signIn } from 'next-auth/react';

export function LogInButton() {
  const isSmallVersion = useBreakpointValue({ base: false, md: true });

  return (
    <ResponsiveButton
      aria-label="Login with Google"
      leftIcon={<RiGoogleFill />}
      onlyIcon={!isSmallVersion}
      colorScheme="gray"
      onClick={() => signIn()}
    >
      Login with Google
    </ResponsiveButton>
  );
}
