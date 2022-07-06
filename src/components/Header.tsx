import { Box, useColorModeValue } from '@chakra-ui/react';
import { NavBar } from 'components/NavBar';

export function Header() {
  const navbarBgSelected = useColorModeValue('#eeeeee', '#262626');

  const navbarColorSelected = useColorModeValue(
    { base: 'black', md: 'white' },
    'white',
  );

  return (
    <Box
      as="header"
      zIndex="overlay"
      pos="absolute"
      top={{ base: 0, md: '2rem' }}
      left="50%"
      transform="translateX(-50%)"
      maxWidth="1250px"
      width={{ base: '100%', md: '90%' }}
      rounded={{ base: 'none', md: '2xl' }}
    >
      <NavBar
        bg="transparent"
        color="white"
        bgSelected={{ base: navbarBgSelected, md: 'transparent' }}
        colorSelected={navbarColorSelected}
      />
    </Box>
  );
}
