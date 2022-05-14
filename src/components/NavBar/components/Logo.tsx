import { Box, BoxProps, Text } from '@chakra-ui/react';

export function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text fontSize="4xl" fontWeight="bold">
        Vapor
      </Text>
    </Box>
  );
}
