import { Center, Icon, Spinner, Text } from '@chakra-ui/react';
import { BiJoystick } from 'react-icons/bi';

export function Fallback() {
  return (
    <Center w="100%" h="100vh" flexDirection="column" gap="1rem">
      <Spinner color="action.500" />

      <Text
        fontSize="2xl"
        color="action.500"
        textTransform="uppercase"
        fontWeight="extrabold"
      >
        Loading game...
      </Text>

      <Icon as={BiJoystick} color="action.500" w={20} h={20} />
    </Center>
  );
}
