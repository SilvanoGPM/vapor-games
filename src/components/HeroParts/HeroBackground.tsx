import { Box, BoxProps, Flex } from '@chakra-ui/react';

export function HeroBackground({ bgImage, children, ...props }: BoxProps) {
  return (
    <Box
      as="section"
      w="100%"
      pos="relative"
      h={{ base: '400px', md: '95vh' }}
      minH={{ base: '250px', md: '300px', lg: '550px' }}
      transition="ease-in-out 0.2s"
      boxShadow="dark-lg"
      sx={{
        '&::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgImage,
          filter: 'brightness(0.3)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          bgPos: ['center', 'top'],
        },
      }}
      {...props}
    >
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        maxW="1400px"
        m="auto"
        flexDir="column"
        justify="flex-end"
        py="1rem"
        px={{ base: '2rem', md: '4rem' }}
        color="white"
      >
        {children}
      </Flex>
    </Box>
  );
}
