import {
  Box,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { Rating } from 'components/Rating';
import { Metacritic } from 'components/Metacritic';

type GameCardProps = {
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  metacritic?: number | null;
  fallbackImage: string;
};

export function GameCard({
  slug,
  name,
  background_image,
  rating,
  metacritic,
  fallbackImage,
}: GameCardProps) {
  const outlineColor = useColorModeValue('black', 'white');
  const prefersReducedMotion = usePrefersReducedMotion();

  const shimmerAnimation = keyframes`
    from {
      background-position: -40rem 0;
    }

    to {
      background-position: 40rem 0;
    }
  `;

  const imageLoadingAnimation = prefersReducedMotion
    ? undefined
    : `${shimmerAnimation} 1s linear infinite forwards`;

  return (
    <NextLink href={`/games/${slug}`} passHref>
      <Link
        _focus={{ outlineColor: outlineColor, transform: 'translateY(-10px)' }}
        role="group"
      >
        <Box
          minW={300}
          h={400}
          pos="relative"
          cursor="pointer"
          shadow="2xl"
          transition="ease-in-out 0.2s"
          _hover={{ transform: 'translateY(-10px)' }}
        >
          <Image
            fallbackSrc={fallbackImage}
            src={background_image}
            objectFit="cover"
            filter={{ base: '', md: 'grayscale(80%)' }}
            w="100%"
            h="100%"
            bgColor="#f6f7f8"
            bgGradient="linear(
              to-r,
              #f6f7f8 0%,
              #e3e5e9 20%,
              #f6f7f8 40%,
              #e3e5e9 100%
            )"
            bgSize="80rem 14rem"
            animation={imageLoadingAnimation}
            transition="ease-in-out 0.2s"
            _groupHover={{
              filter: 'grayscale(0%)',
            }}
            _groupFocus={{
              filter: 'grayscale(0%)',
            }}
          />

          <Flex
            pos="absolute"
            top={0}
            right={0}
            px={2}
            py={4}
            bgGradient="linear(to top right, transparent 40%, blackAlpha.800 80%)"
            justify="space-between"
            w="100%"
            opacity={{ base: 1, lg: 0 }}
            transition="ease-in-out"
            transitionDuration="0.2s"
            _groupHover={{ opacity: 1 }}
            _groupFocus={{ opacity: 1 }}
          >
            {metacritic !== undefined && metacritic !== null ? (
              <Metacritic size="32px" value={metacritic} />
            ) : (
              <Spacer />
            )}
            <Rating score={rating} iconSize="16px" />
          </Flex>

          <Box
            w="100%"
            pos="absolute"
            bottom={0}
            left={0}
            opacity={{ base: 1, lg: 0 }}
            bgGradient="linear(to bottom, transparent 10%, blackAlpha.800 50%)"
            transition="ease-in-out"
            transitionDuration="0.2s"
            _groupHover={{ opacity: 1 }}
            _groupFocus={{ opacity: 1 }}
          >
            <Text color="white" fontSize="3xl" p={4} fontWeight="bold">
              {name}
            </Text>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
}
