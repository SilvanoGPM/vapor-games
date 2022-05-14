import { Box, Flex, Heading, Tag, TagLeftIcon, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const bgImage =
  'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg';

export function Hero() {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: '250px', md: '90vh' }}
      minH={{ base: '250px', md: '300px', lg: '550px' }}
      bgImage={bgImage}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box
        w="100%"
        h="100%"
        px={{ base: '2rem', lg: '4rem' }}
        color="white"
        paddingTop={{ base: '100px', md: '300px', lg: '350px' }}
        bg="linear-gradient(to bottom left, transparent 10%, rgba(0, 0, 0, 0.95) 80%)"
      >
        <Heading mb="1rem">Grand Theft Auto V</Heading>
        <Text mb="1rem">Rockstar Games</Text>

        <Flex gap={['0.1rem', '0.5rem']} wrap="wrap">
          <Tag colorScheme="green">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            Action
          </Tag>

          <Tag colorScheme="teal">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            Adventure
          </Tag>

          <Tag colorScheme="orange">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            Singleplayer
          </Tag>
        </Flex>
      </Box>
    </Box>
  );
}
