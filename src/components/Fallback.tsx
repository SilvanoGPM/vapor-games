import { Center, Spinner, Text } from '@chakra-ui/react';

export function Fallback() {
  return (
    <Center w="100%" h="100vh" flexDirection="column" gap="1rem">
      <Spinner color="action" />
      <Text
        fontSize="2xl"
        color="action"
        textTransform="uppercase"
        fontWeight="extrabold"
      >
        Processing...
      </Text>
    </Center>
  );
}
