import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton, LightMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type GoBackProps = {
  isOpen: boolean;
};

export function GoBack({ isOpen }: GoBackProps) {
  const router = useRouter();

  return (
    <LightMode>
      <IconButton
        display={router.pathname !== '/' && !isOpen ? 'flex' : 'none'}
        fontSize="32px"
        aria-label="Go back"
        icon={<ArrowBackIcon />}
        fontWeight="bold"
        onClick={router.back}
        bgColor="transparent"
        _hover={{
          bgColor: 'transparent',
        }}
        _focus={{ outline: 'none' }}
        _focusVisible={{
          outline: 'none',
          ringColor: 'white',
          ring: 1,
          ringOffsetColor: 'white',
          ringOffset: '0.2rem',
          bgColor: 'transparent',
        }}
        _active={{
          bgColor: 'transparent',
        }}
      />
    </LightMode>
  );
}
