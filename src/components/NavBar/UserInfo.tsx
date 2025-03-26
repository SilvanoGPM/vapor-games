import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  VStack,
} from '@chakra-ui/react';

import { signOut } from 'next-auth/react';
import { RiLogoutBoxFill, RiUser2Fill } from 'react-icons/ri';
import { BiDownArrow } from 'react-icons/bi';

import { firstString } from 'utils/firstString';
import { OneLineText } from 'components/OneLineText';

interface UserInfoProps {
  name: string;
  image?: string | null;
  email?: string | null;
}

export function UserInfo({ name, image, email }: UserInfoProps) {
  return (
    <Flex h="40px" align="center">
      <Box display={{ base: 'none', md: 'block' }} mr="4">
        <OneLineText title={name}>{name}</OneLineText>

        <OneLineText
          title={String(email)}
          color="gray.500"
          fontSize="sm"
          maxWidth="140px"
        >
          {email}
        </OneLineText>
      </Box>

      <Popover trigger="click" placement="bottom-end">
        <PopoverTrigger>
          <Center as="button">
            <Avatar
              name={name}
              src={String(image)}
              w="40px"
              h="40px"
              bg="action.500"
              color="white"
              rounded="full"
            />

            <Icon as={BiDownArrow} ml="2" />
          </Center>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            w="200px"
            _focus={{ outline: 'none' }}
            _dark={{ bg: '#191919' }}
            _light={{ bg: '#ffffff' }}
          >
            <PopoverCloseButton />
            <PopoverHeader>
              Signed in as{' '}
              <OneLineText fontWeight={600} as="span">
                {firstString(name)}
              </OneLineText>
            </PopoverHeader>
            <PopoverBody>
              <VStack spacing="4" w="full">
                <Button w="full" size="sm" leftIcon={<Icon as={RiUser2Fill} />}>
                  My profile
                </Button>

                <Button
                  w="full"
                  colorScheme="red"
                  leftIcon={<Icon as={RiLogoutBoxFill} />}
                  size="sm"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
