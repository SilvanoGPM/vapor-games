import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

import { VaporImage } from 'components/VaporImage';

interface GameImageProps {
  name: string;
  src?: string | null;
}

const fallbackImage = '/assets/game-fallback.png';

export function GameImage({ src, name }: GameImageProps) {
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
    <VaporImage
      width={1200}
      height={1700}
      src={src || fallbackImage}
      alt={`Game - ${name}`}
      objectFit="cover"
      filter={{ base: '', md: 'grayscale(80%)' }}
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
      onError={(event) => {
        event.currentTarget.src = fallbackImage;
      }}
    />
  );
}
