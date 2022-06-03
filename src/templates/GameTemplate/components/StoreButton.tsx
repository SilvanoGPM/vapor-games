import { Button, ButtonProps, Link } from '@chakra-ui/react';

export type StoreButtonProps = {
  url?: string;
} & ButtonProps;

export function StoreButton({ url, children, ...props }: StoreButtonProps) {
  return (
    <Link
      href={url}
      target="_blank"
      tabIndex={-1}
      flex="1"
      border="none"
      outline="none"
      _focus={{ outline: 'none' }}
      _focusVisible={{ border: 'none', outline: 'none' }}
    >
      <Button
        w="100%"
        bgColor="black"
        color="white"
        _hover={{
          bg: 'black',
          filter: 'brightness(0.9)',
        }}
        _focus={{ outline: 'none' }}
        _focusVisible={{
          outline: 'none',
          ringColor: 'white',
          ring: 1,
          ringOffsetColor: 'white',
          ringOffset: '0.1rem',
        }}
        _active={{
          border: 'none',
          outline: 'none',
          bg: 'black',
        }}
        _disabled={{
          bg: 'black',
          filter: 'brightness(0.8)',
          opacity: 0.6,
          cursor: 'not-allowed',
          _hover: { filter: 'brightness(0.8)' },
        }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
