import { ReactNode } from 'react';
import { Link, Text, TextProps } from '@chakra-ui/react';

type MenuItemProps = {
  to: string;
  children: ReactNode;
  selected?: boolean;
} & TextProps;

export function MenuItem({
  to,
  children,
  selected = false,
  ...props
}: MenuItemProps) {
  return (
    <Link
      href={to}
      rounded="xl"
      bg={selected ? 'white' : 'transparent'}
      color={selected ? 'black' : 'white'}
      px={4}
      _focus={{
        outline: 'none',
        ringColor: 'blackAlpha.400',
        ring: 1,
        ringOffsetColor: 'transparent',
        ringOffset: '0.2rem',
      }}
      {...(selected ? { 'data-testid': 'selected' } : {})}
    >
      <Text display="flex" alignItems="center" gap="0.5rem" {...props}>
        {children}
      </Text>
    </Link>
  );
}
