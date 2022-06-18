import { Text, TextProps } from '@chakra-ui/react';

export function HeroPublisher({ children, ...props }: TextProps) {
  return (
    <Text
      maxW={{ base: '300px', md: '400px' }}
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Text>
  );
}
