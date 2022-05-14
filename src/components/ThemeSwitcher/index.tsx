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

  const toggleThemeIcon = useColorModeValue(FaSun, FaMoon);
  const toggleThemeTooltip = useColorModeValue(
    'Toggle to dark',
    'Toggle to light',
  );

  return (
    <LightMode>
      <Tooltip label={toggleThemeTooltip} placement="left" hasArrow>
        <IconButton
          colorScheme="whiteAlpha"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          icon={<Icon as={toggleThemeIcon} />}
        />
      </Tooltip>
    </LightMode>
  );
}
