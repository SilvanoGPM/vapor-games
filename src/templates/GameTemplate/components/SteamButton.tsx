import { FaSteam } from 'react-icons/fa';
import { StoreButton, StoreButtonProps } from './StoreButton';

export function SteamButton(props: StoreButtonProps) {
  return (
    <StoreButton leftIcon={<FaSteam />} {...props}>
      Buy on Steam
    </StoreButton>
  );
}
