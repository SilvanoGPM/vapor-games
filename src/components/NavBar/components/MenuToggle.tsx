import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <Box
      as="button"
      display={{ base: 'block', md: 'none' }}
      fontSize="2xl"
      onClick={toggle}
    >
      {isOpen ? (
        <CloseIcon data-testid="close" />
      ) : (
        <HamburgerIcon data-testid="open" />
      )}
    </Box>
  );
}
