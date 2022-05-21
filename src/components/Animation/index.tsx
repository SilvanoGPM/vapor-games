import { Box, BoxProps } from '@chakra-ui/react';

type AnimationProps = {
  animation: string;
  delay?: string;
  duration?: string;
} & BoxProps;

export function Animation({
  children,
  className,
  animation,
  delay = '0',
  duration = '1s',
  ...props
}: AnimationProps) {
  return (
    <Box
      w="max-content"
      className={`${animation} ${className}`}
      style={{
        animationDelay: delay,
        animationDuration: duration,
        animationFillMode: 'backwards',
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
