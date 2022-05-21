import {
  Icon,
  IconButton,
  LightMode,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();

  const { label, icon } = useColorModeValue(
    { label: 'Toggle to dark', icon: FaSun },
    { label: 'Toggle to light', icon: FaMoon },
  );

  return (
    <LightMode>
      <Tooltip label={label} placement="bottom" hasArrow>
        <IconButton
          colorScheme="whiteAlpha"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          icon={<Icon as={icon} />}
          _focus={{
            outline: 'none',
            ringColor: 'white',
            ring: 1,
            ringOffsetColor: 'white',
            ringOffset: '0.2rem',
          }}
        />
      </Tooltip>
    </LightMode>
  );
}
