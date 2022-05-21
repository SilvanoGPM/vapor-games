import { Box, Stack, Icon, ResponsiveValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsHouse, BsSearch } from 'react-icons/bs';

import { MenuItem } from './MenuItem';

type MenuLinksProps = {
  isOpen: boolean;
  bgSelected?: ResponsiveValue<string>;
  colorSelected?: ResponsiveValue<string>;
};

export const routes = [
  { to: '/', name: 'Home', icon: BsHouse },
  { to: '/search', name: 'Search', icon: BsSearch },
];

export function MenuLinks({
  isOpen,
  bgSelected,
  colorSelected,
}: MenuLinksProps) {
  const router = useRouter();

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        mt={{ base: isOpen ? 4 : 10, md: 0 }}
        align="flex-start"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {routes.map(({ to, name, icon }) => (
          <MenuItem
            key={`${name}-${to}`}
            to={to}
            textTransform="uppercase"
            fontSize="xl"
            bgSelected={bgSelected}
            colorSelected={colorSelected}
            selected={router.pathname === to}
          >
            <Icon as={icon} />
            {name}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
}
