import { Heading, HeadingProps } from '@chakra-ui/react';

export function HeroTitle({ children, ...props }: HeadingProps) {
  return (
    <Heading
      maxW={{ base: '300px', md: '400px' }}
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  );
}
