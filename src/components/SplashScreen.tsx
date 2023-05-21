import { Box, Center, CircularProgress, Text } from '@chakra-ui/react';

import { useSplashScreen } from 'hooks/useSplashScreen';
import { theme } from 'styles/theme';

// Para as cores utilizar o objeto theme porque o componente não consegue acessar
// as informações do CSS para obter as cores.
export function SplashScreen() {
  useSplashScreen('show');

  return (
    <Box
      id="loader"
      pos="fixed"
      left="0"
      top="0"
      w="100vw"
      h="100vh"
      zIndex="1000000"
      bg="#121212"
    >
      <Center h="100vh" flexDir="column">
        <CircularProgress
          isIndeterminate
          color={theme.colors.action['500']}
          trackColor="#121212"
        />

        <Text mt="8" color="white">
          Loading...
        </Text>
      </Center>
    </Box>
  );
}
