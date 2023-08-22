import { FormEvent, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

type SearchInputProps = {
  isLoading: boolean;
  onSubmit: (value: string) => void;
};

export function SearchInput({ onSubmit, isLoading }: SearchInputProps) {
  const [game, setGame] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit(game.toLowerCase());
  }

  return (
    <Box as="form" w="full" onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          value={game}
          onChange={(event) => setGame(event.target.value)}
          border="1px"
          borderColor="white"
          placeholder="ex: Minecraft"
          fontSize="2xl"
          w="full"
          disabled={isLoading}
          _placeholder={{ color: 'white' }}
          _focus={{ outline: 'none' }}
          _focusVisible={{ borderColor: 'action' }}
          _hover={{ borderColor: 'action' }}
          _disabled={{
            _hover: { borderColor: 'white', cursor: 'not-allowed' },
          }}
        />

        <InputRightElement>
          <IconButton
            aria-label="Search game"
            variant="unstyled"
            type="submit"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xl"
            icon={<SearchIcon />}
            isLoading={isLoading}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
