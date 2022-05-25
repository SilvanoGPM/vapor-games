import { useState, useEffect, ChangeEvent } from 'react';
import { Input, InputGroup, InputLeftElement, Spinner } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { useDebounce } from 'hooks/useDebounce';

type SearchInputProps = {
  isLoading: boolean;
  onValueChange: (value: string) => void;
};

export function SearchInput({ onValueChange, isLoading }: SearchInputProps) {
  const [game, setGame] = useState('');

  const debouncedGame = useDebounce(game, 1000);

  useEffect(() => {
    if (debouncedGame) {
      onValueChange(debouncedGame);
    }
  }, [debouncedGame, onValueChange]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setGame(event.target.value);
  }

  return (
    <InputGroup>
      <InputLeftElement>
        {isLoading ? <Spinner /> : <SearchIcon />}
      </InputLeftElement>
      <Input
        value={game}
        onChange={handleChange}
        border="1px"
        borderColor="white"
        placeholder="ex: Minecraft"
        fontSize="2xl"
        w="100%"
        disabled={isLoading}
        _placeholder={{ color: 'white' }}
        _focus={{ borderColor: 'action' }}
        _hover={{ borderColor: 'action' }}
        _disabled={{ _hover: { borderColor: 'white', cursor: 'not-allowed' } }}
      />
    </InputGroup>
  );
}
