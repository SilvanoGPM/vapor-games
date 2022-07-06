import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

export const VaporImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});
