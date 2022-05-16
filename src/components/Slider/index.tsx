import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SliderProps = {
  settings: SwiperProps;
  children: React.ReactNode;
};

export type SlideSettings = SwiperProps;

export const Slide = SwiperSlide;

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
