import { Box } from '@chakra-ui/react';
import { DefaultUi, Player, Youtube } from '@vime/react';

import { Title } from 'components/Title';

interface TrailerProps {
  trailerId: string;
}

export function Trailer({ trailerId }: TrailerProps) {
  return (
    <Box w="full" mb="4" overflow="hidden">
      <Title as="h3" mb="4">
        Trailer
      </Title>

      <Player>
        <Youtube videoId={trailerId} />
        <DefaultUi />
      </Player>
    </Box>
  );
}
