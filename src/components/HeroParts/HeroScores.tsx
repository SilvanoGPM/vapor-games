import { Flex, FlexProps } from '@chakra-ui/react';
import { Metacritic } from 'components/Metacritic';
import { Rating } from 'components/Rating';

type HeroScoresProps = {
  rating: number;
  metacritic?: number | null;
} & FlexProps;

export function HeroScores({ rating, metacritic, ...props }: HeroScoresProps) {
  return (
    <Flex gap="1rem" {...props}>
      <Rating score={rating} iconSize="20px" />

      {metacritic !== undefined && metacritic !== null && (
        <Metacritic size="32px" value={metacritic} />
      )}
    </Flex>
  );
}
