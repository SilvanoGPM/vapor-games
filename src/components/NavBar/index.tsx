import { useState } from 'react';

import {
  Box,
  Flex,
  FlexProps,
  ResponsiveValue,
  useColorModeValue,
} from '@chakra-ui/react';

import { useResizeEffect } from 'hooks/useResizeEffect';

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
  const bg = useColorModeValue('#ffffff', '#121212');
  const color = useColorModeValue('#121212', '#ffffff');

  const [isOpen, setIsOpen] = useState(false);

  useResizeEffect(() => setIsOpen(false));

  function handleToggle() {
    setIsOpen(!isOpen);
  }

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
        <Logo
          w="100px"
          display={{ base: 'none', md: 'block' }}
          color={isOpen ? 'black' : props.color}
        />

        <MenuToggle toggle={handleToggle} isOpen={isOpen} />

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
