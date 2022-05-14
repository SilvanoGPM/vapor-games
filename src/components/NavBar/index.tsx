import { useState } from 'react';
import { FlexProps, useColorModeValue } from '@chakra-ui/react';

import { useResizeEffect } from 'hooks/useResizeEffect';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { MenuLinks } from './components/MenuLinks';
import { MenuToggle } from './components/MenuToggle';

export function NavBar(props: FlexProps) {
  const bg = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

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
      >
        <Logo
          w="100px"
          display={{ base: 'none', md: 'block' }}
          color={isOpen ? 'black' : props.color}
        />
        <MenuToggle toggle={handleToggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </Container>
    </>
  );
}
