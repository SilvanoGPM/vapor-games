import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function UserInfo() {
  return (
    <Flex h="40px" align="center">
      <Box display={{ base: 'none', md: 'block' }} mr="4">
        <Text>Silvano Marques</Text>
        <Text color="gray.500" fontSize="sm">
          silvanosilvino@hotmail.com
        </Text>
      </Box>
      <Image src="https://github.com/SkyG0D.png" borderRadius="xl" w="40px" />
    </Flex>
  );
}
