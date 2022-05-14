import { ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

type ContainerProps = { children: ReactNode } & FlexProps;

export function Container({ children, ...props }: ContainerProps) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={8}
      py={5}
      {...props}
    >
      {children}
    </Flex>
  );
}
