import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import {
  Box,
  DarkMode,
  Flex,
  FlexProps,
  ResponsiveValue,
  Spinner,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { useResizeEffect } from 'hooks/useResizeEffect';
import { useScrollLock } from 'hooks/useScrollLock';
import { LogInButton } from 'components/LogInButton';

import { ThemeSwitcher } from '../ThemeSwitcher';

import { Container } from './Container';
import { Logo } from './Logo';
import { MenuLinks } from './MenuLinks';
import { MenuToggle } from './MenuToggle';
import { GoBack } from './GoBack';
import { UserInfo } from './UserInfo';

type NavBarProps = {
  bgSelected?: ResponsiveValue<string>;
  colorSelected?: ResponsiveValue<string>;
} & FlexProps;

export function NavBar({
  bgSelected = 'white',
  colorSelected = 'black',
  ...props
}: NavBarProps) {
  const router = useRouter();

  const { lockScroll, unlockScroll } = useScrollLock();

  const bg = useColorModeValue('#ffffff', '#121212');
  const color = useColorModeValue('#121212', '#ffffff');

  const { data: userInfo, status } = useSession();

  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  useResizeEffect(onClose);

  const isUserLoggedLoading = status === 'loading';
  const isUserLoggedIn = status === 'authenticated';

  return (
    <>
      <Container
        {...props}
        bg={isOpen ? bg : props.bg}
        h={{ base: isOpen ? '100vh' : 'auto', md: 'auto' }}
        color={isOpen ? color : props.color}
        transition="ease"
        transitionDuration="0.2s"
        boxShadow={{ base: isOpen ? 'dark-lg' : 'none', md: 'none' }}
        flexDirection={isOpen ? 'column' : 'row'}
        justify={{
          base: isOpen ? 'flex-start' : 'space-between',
          md: 'space-between',
        }}
      >
        <Flex
          align="center"
          gap="1.5rem"
          display={{
            base: router.pathname !== '/' ? 'flex' : 'none',
            md: 'flex',
          }}
        >
          <GoBack isOpen={isOpen} />
          <Logo
            display={{ base: 'none', md: 'block' }}
            color={isOpen ? 'black' : props.color}
          />
        </Flex>

        <MenuToggle toggle={onToggle} isOpen={isOpen} />

        <Flex
          align="center"
          gap="1rem"
          w={{ base: isOpen ? '100%' : 'auto', md: 'auto' }}
        >
          <MenuLinks
            bgSelected={bgSelected}
            colorSelected={colorSelected}
            isOpen={isOpen}
          />

          <Box
            w="40px"
            h="40px"
            display={{ base: isOpen ? 'none' : 'block', md: 'block' }}
          >
            <ThemeSwitcher />
          </Box>

          {!isOpen && (
            <>
              <Box h="30px" w="2px" bg="gray.400" opacity={0.5} />
              {isUserLoggedLoading ? (
                <Spinner color="action.500" size="sm" />
              ) : (
                <>
                  {isUserLoggedIn ? (
                    <UserInfo
                      name={userInfo?.user?.name || 'Jon Doe'}
                      email={userInfo?.user?.email}
                      image={userInfo?.user?.image}
                    />
                  ) : (
                    <DarkMode>
                      <LogInButton />
                    </DarkMode>
                  )}
                </>
              )}
            </>
          )}
        </Flex>
      </Container>
    </>
  );
}
