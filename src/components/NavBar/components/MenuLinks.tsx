import { Box, Icon, Stack } from '@chakra-ui/react';
import { BsHouse, BsSearch } from 'react-icons/bs';

import { MenuItem } from './MenuItem';

type MenuLinksProps = {
  isOpen: boolean;
};

export function MenuLinks({ isOpen }: MenuLinksProps) {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        mt={{ base: 10, md: 0 }}
        align="flex-start"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/" fontSize="xl">
          <Icon as={BsHouse} />
          Home
        </MenuItem>

        <MenuItem to="/search" fontSize="xl">
          <Icon as={BsSearch} />
          Search
        </MenuItem>
      </Stack>
    </Box>
  );
}
