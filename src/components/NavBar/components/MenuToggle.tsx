import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      fontSize="2xl"
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}
