import { SiEpicgames } from 'react-icons/si';

import { StoreButton, StoreButtonProps } from './StoreButton';

export function EpicGamesButton(props: StoreButtonProps) {
  return (
    <StoreButton leftIcon={<SiEpicgames />} {...props}>
      Buy on Epic Games
    </StoreButton>
  );
}
