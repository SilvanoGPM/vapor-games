import { Text, TextProps } from '@chakra-ui/react';

export function OneLineText({ children, ...props }: TextProps) {
  return (
    <Text
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      maxW="200px"
      {...props}
    >
      {children}
    </Text>
  );
}
