import { Tag, TagLeftIcon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

type GameTagProps = {
  text: string;
};

export function GameTag({ text }: GameTagProps) {
  return (
    <Tag colorScheme="whiteAlpha">
      <TagLeftIcon boxSize="12px" as={AddIcon} />
      {text}
    </Tag>
  );
}
