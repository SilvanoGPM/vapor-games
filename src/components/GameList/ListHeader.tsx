import { ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

interface ListHeaderProps {
  header?: ReactNode;
  headerStyle?: FlexProps;
}

export function ListHeader({ header, headerStyle }: ListHeaderProps) {
  if (!header) {
    return null;
  }

  return (
    <Flex mb={2} justify="space-between" align="center" {...headerStyle}>
      {header}
    </Flex>
  );
}
