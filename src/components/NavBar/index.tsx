import {
  Box,
  Flex,
  FlexProps,
  IconButton,
  LightMode,
  ResponsiveValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useResizeEffect } from 'hooks/useResizeEffect';
import { ArrowBackIcon } from '@chakra-ui/icons';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { MenuLinks } from './components/MenuLinks';
import { MenuToggle } from './components/MenuToggle';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

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

  const bg = useColorModeValue('#ffffff', '#121212');
  const color = useColorModeValue('#121212', '#ffffff');

  const { isOpen, onToggle, onClose } = useDisclosure();

  useResizeEffect(onClose);

  return (
    <>
      <Container
        {...props}
        bg={isOpen ? bg : props.bg}
        color={isOpen ? color : props.color}
        transition="ease"
        transitionDuration="0.2s"
        boxShadow={{ base: isOpen ? 'dark-lg' : 'none', md: 'none' }}
        flexDirection={isOpen ? 'column' : 'row'}
      >
        <Flex
          align="center"
          gap="1.5rem"
          display={{
            base: router.pathname !== '/' ? 'flex' : 'none',
            md: 'flex',
          }}
        >
          <LightMode>
            <IconButton
              display={router.pathname !== '/' && !isOpen ? 'block' : 'none'}
              fontSize="32px"
              aria-label="Go back"
              icon={<ArrowBackIcon />}
              fontWeight="bold"
              onClick={router.back}
              bgColor="transparent"
              _focus={{
                outline: 'none',
                ringColor: 'white',
                ring: 1,
                ringOffsetColor: 'white',
                ringOffset: '0.2rem',
              }}
            />
          </LightMode>
          <Logo
            display={{ base: 'none', md: 'block' }}
            color={isOpen ? 'black' : props.color}
          />
        </Flex>

        <MenuToggle toggle={onToggle} isOpen={isOpen} />

        <Flex align="center" gap="1rem">
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
        </Flex>
      </Container>
    </>
  );
}
