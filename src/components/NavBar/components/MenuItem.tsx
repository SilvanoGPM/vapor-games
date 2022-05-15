import { ReactNode } from 'react';
import { Link, ResponsiveValue, Text, TextProps } from '@chakra-ui/react';

type MenuItemProps = {
  to: string;
  children: ReactNode;
  selected?: boolean;
  bgSelected?: ResponsiveValue<string>;
  colorSelected?: ResponsiveValue<string>;
} & TextProps;

export function MenuItem({
  to,
  children,
  bgSelected,
  colorSelected,
  selected = false,
  ...props
}: MenuItemProps) {
  return (
    <Link
      href={to}
      w="100%"
      rounded="xl"
      bg={selected ? bgSelected : 'inherit'}
      color={selected ? colorSelected : 'inherit'}
      px={4}
      py={{ base: 4, md: 1 }}
      m={0}
      _focus={{
        outline: 'none',
        ringColor: 'white',
        ring: 1,
        ringOffsetColor: 'transparent',
        ringOffset: '0.2rem',
      }}
      _hover={{
        ringColor: 'white',
        ring: 1,
        ringOffsetColor: 'transparent',
        ringOffset: '0.2rem',
      }}
      {...(selected
        ? {
            'data-testid': 'selected',
            fontWeight: 'bold',
            ringColor: 'white',
            ring: 1,
            ringOffsetColor: 'transparent',
            ringOffset: '0.2rem',
          }
        : {})}
    >
      <Text display="flex" alignItems="center" gap="0.5rem" m={0} {...props}>
        {children}
      </Text>
    </Link>
  );
}
