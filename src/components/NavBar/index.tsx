import { FlexProps } from '@chakra-ui/react';
import { useState } from 'react';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { MenuLinks } from './components/MenuLinks';
import { MenuToggle } from './components/MenuToggle';

export function NavBar(props: FlexProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Container
        {...props}
        bg={isOpen ? 'white' : props.bg}
        color={isOpen ? 'black' : props.color}
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
