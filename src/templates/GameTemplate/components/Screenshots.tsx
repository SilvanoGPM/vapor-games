import {
  Box,
  useBreakpointValue,
  usePrefersReducedMotion,
  keyframes,
} from '@chakra-ui/react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Slider, SlideSettings, Slide } from 'components/Slider';
import { VaporImage } from 'components/VaporImage';
import { ScreenshotType } from 'services/rawg';
import { Title } from 'components/Title';

type ScreenshotsProps = {
  screenshots: ScreenshotType[];
};

function Screenshot({ image }: { image: string }) {
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
      unoptimized
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
      src={image}
      width={1280}
      height={720}
      layout="fill"
      objectFit="cover"
      filter="brightness(0.8)"
      overflow="hidden"
    />
  );
}

export function Screenshots({ screenshots }: ScreenshotsProps) {
  const slidesPerView = useBreakpointValue({ base: 1, md: 2 });
  const sliderClassName = useBreakpointValue({
    base: 'show-buttons',
    md: '',
  });

  const sliderSettings: SlideSettings = {
    spaceBetween: 30,
    slidesPerView: screenshots.length < 2 ? screenshots.length : slidesPerView,
    navigation: screenshots.length > 2,
    draggable: screenshots.length > 2,
    loop: screenshots.length > 2,
    pagination: screenshots.length > 2 && {
      clickable: true,
    },
    className: sliderClassName,
  };

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
      <Box mb="8" as="section">
        <Title as="h3" mb="4">
          Screenshots
        </Title>

        <Box w="100%" h="400px" overflow="hidden">
          {screenshots.length === 1 ? (
            <Screenshot image={screenshots[0].image} />
          ) : (
            <Slider settings={sliderSettings} style={{ height: '100%' }}>
              {screenshots.map(({ id, image }) => (
                <Slide key={id}>
                  <Screenshot image={image} />
                </Slide>
              ))}
            </Slider>
          )}
        </Box>
      </Box>
    </AnimationOnScroll>
  );
}
