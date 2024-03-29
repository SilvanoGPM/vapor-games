import { StarIcon } from '@chakra-ui/icons';
import { Flex, FlexProps, Tooltip } from '@chakra-ui/react';

type RatingProps = {
  score: number;
  iconSize?: number | string;
  total?: number;
} & FlexProps;

export function Rating({
  score,
  iconSize = 16,
  total = 5,
  ...props
}: RatingProps) {
  const stars = Array(total)
    .fill(1)
    .map((_, index) => index + 1);

  return (
    <Tooltip
      label={`Rating: ${score}`}
      placement="top"
      hasArrow
      color="white"
      bg="action.500"
    >
      <Flex
        gap="1"
        w={`calc(${iconSize} * ${total + 1})`}
        align="center"
        justify="center"
        {...props}
      >
        {stars.map((value) => (
          <StarIcon
            key={value}
            boxSize={iconSize}
            color={value > Math.round(score) ? 'whiteAlpha.300' : 'gold'}
          />
        ))}
      </Flex>
    </Tooltip>
  );
}
