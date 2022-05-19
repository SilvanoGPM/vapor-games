import { Box, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import { Slider, SlideSettings, Slide } from 'components/Slider';
import { ScreenshotType } from 'services/rawg';

type ScreenshotsProps = {
  screenshots: ScreenshotType[];
};

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

  return (
    <Box mb="8">
      <Heading as="h3" mb="8">
        Screenshots
      </Heading>

      <Box w="100%" h="400px">
        <Slider settings={sliderSettings}>
          {screenshots.map(({ id, image }) => (
            <Slide key={id}>
              <Image
                src={image}
                w="100%"
                h="400px"
                objectFit="cover"
                filter="brightness(0.8)"
              />
            </Slide>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
