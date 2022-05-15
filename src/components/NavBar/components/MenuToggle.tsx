import { CloseIcon } from '@chakra-ui/icons';
import { Icon, IconButton, LightMode, useColorMode } from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  const { colorMode } = useColorMode();

  return (
    <LightMode>
      <IconButton
        colorScheme={
          colorMode === 'light' && isOpen ? 'blackAlpha' : 'whiteAlpha'
        }
        aria-label="Open menu"
        data-testid={isOpen ? 'close' : 'open'}
        icon={isOpen ? <CloseIcon color="red" /> : <Icon as={RiMenu2Line} />}
        display={{ base: 'block', md: 'none' }}
        onClick={toggle}
        fontSize="lg"
        _focus={{
          outline: 'none',
          ringColor: 'white',
          ring: 1,
          ringOffsetColor: 'white',
          ringOffset: '0.2rem',
        }}
      />
    </LightMode>
  );
}
