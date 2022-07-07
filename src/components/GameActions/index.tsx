import { HStack, Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { BiLike, BiJoystick, BiHeart } from 'react-icons/bi';
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';

import { getUserActions, toggleUserAction } from 'services/supabase';
import { queryCient } from 'services/queryClient';

import { Action } from './Action';

type ActionType = 'like' | 'favorite' | 'played';

interface GameActionsProps {
  gameName: string;
}

export function GameActions({ gameName }: GameActionsProps) {
  const { data: userInfo, status } = useSession();

  const isUserLoggedLoading = status === 'loading';

  const [latestAction, setLatestAction] = useState<ActionType | null>(null);

  const { data, isLoading } = useQuery(
    ['actions', gameName],
    () => getUserActions({ user: userInfo?.user?.email || '', game: gameName }),
    { staleTime: 60 * 60 * 1000 },
  );

  const mutation = useMutation(
    (action: ActionType) =>
      toggleUserAction({
        user: userInfo?.user?.email || '',
        game: gameName,
        action,
      }),
    { onSuccess: () => queryCient.invalidateQueries(['actions', gameName]) },
  );

  function toggleAction(action: ActionType) {
    return async () => {
      setLatestAction(action);
      await mutation.mutateAsync(action);
    };
  }

  if (isUserLoggedLoading || isLoading) {
    return <Spinner color="action.500" />;
  }

  const actions = data?.body?.[0];

  const favoriteLoading = mutation.isLoading && latestAction === 'favorite';
  const likeLoading = mutation.isLoading && latestAction === 'like';
  const playedLoading = mutation.isLoading && latestAction === 'played';

  return (
    <HStack spacing="4">
      <Action
        aria-label="Favorite"
        activeColor="red"
        loading={favoriteLoading}
        active={actions?.favorite}
        icon={BiHeart}
        onClick={toggleAction('favorite')}
      />

      <Action
        aria-label="Like"
        activeColor="lightblue"
        loading={likeLoading}
        active={actions?.like}
        icon={BiLike}
        onClick={toggleAction('like')}
      />

      <Action
        aria-label="Played"
        activeColor="action?.500"
        loading={playedLoading}
        active={actions?.played}
        icon={BiJoystick}
        onClick={toggleAction('played')}
      />
    </HStack>
  );
}
