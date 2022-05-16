import { Button, ButtonProps, Link } from '@chakra-ui/react';

export type StoreButtonProps = {
  url?: string;
} & ButtonProps;

export function StoreButton({ url, children, ...props }: StoreButtonProps) {
  return (
    <Link href={url} target="_blank" tabIndex={-1} flex="1">
      <Button
        w="100%"
        bgColor="black"
        color="white"
        _hover={{
          bg: 'black',
          filter: 'brightness(0.9)',
        }}
        _focus={{
          outline: 'none',
          ringColor: 'black',
          ring: 2,
          ringOffsetColor: 'white',
          ringOffset: '0.2rem',
        }}
        _active={{
          border: 'none',
          bg: 'black',
        }}
        _disabled={{
          bg: 'black',
          filter: 'brightness(0.8)',
          cursor: 'default',
          _hover: { filter: 'brightness(0.8)' },
        }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
