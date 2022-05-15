import { Square, Tooltip } from '@chakra-ui/react';

type MetacriticProps = {
  size: number | string;
  value: number;
};

export const metacriticColors = {
  green: '#48b80f',
  yellow: '#ffb300',
  red: '#ff2929',
};

export function Metacritic({ size, value }: MetacriticProps) {
  const bgColor =
    value <= 49
      ? metacriticColors.red
      : value <= 74
      ? metacriticColors.yellow
      : metacriticColors.green;

  return (
    <Tooltip
      placement="top"
      label={`Metascore: ${value}`}
      bgColor={bgColor}
      color="white"
    >
      <Square size={size} bgColor={bgColor} color="white" fontWeight="bold">
        {value}
      </Square>
    </Tooltip>
  );
}
