import { Center, Spinner } from '@chakra-ui/react';

export function Fallback() {
  return (
    <Center w="100%" h="100vh">
      <Spinner />
    </Center>
  );
}
