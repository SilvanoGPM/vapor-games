import { Box, Text } from '@chakra-ui/react';

interface GameTitleProps {
  name: string;
}

export function GameTitle({ name }: GameTitleProps) {
  return (
    <Box
      w="100%"
      pos="absolute"
      bottom={0}
      left={0}
      opacity={{ base: 1, lg: 0 }}
      bgGradient="linear(to bottom, transparent 10%, blackAlpha.800 50%)"
      transition="ease-in-out"
      transitionDuration="0.2s"
      transitionDelay="0.1s"
      transform={{ base: 'translateY(0)', lg: 'translateY(50px)' }}
      _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
      _groupFocus={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <Text color="white" fontSize="3xl" p={4} fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
}
