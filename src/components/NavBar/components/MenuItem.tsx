import { ReactNode } from 'react';
import { Link, Text, TextProps } from '@chakra-ui/react';

type MenuItemProps = {
  to: string;
  children: ReactNode;
} & TextProps;

export function MenuItem({ to, children, ...props }: MenuItemProps) {
  return (
    <Link
      href={to}
      rounded="xl"
      px={4}
      _focus={{
        outline: 'none',
        ringColor: 'blackAlpha.400',
        ring: 1,
        ringOffsetColor: 'transparent',
        ringOffset: '0.2rem',
      }}
    >
      <Text display="flex" alignItems="center" gap="0.5rem" {...props}>
        {children}
      </Text>
    </Link>
  );
}
