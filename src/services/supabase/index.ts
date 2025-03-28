import { generateToken } from 'services/igbd';
import { supabase } from './supabase';

interface UserActionParams {
  user: string;
  game: string;
  action: 'like' | 'played' | 'favorite';
}

export async function createUserActions({
  user,
  game,
  action,
}: UserActionParams) {
  const like = action === 'like';
  const favorite = action === 'favorite';
  const played = action === 'played';

  await supabase.from('actions').insert({ user, game, like, favorite, played });
}

export async function getUserActions({
  user,
  game,
}: Omit<UserActionParams, 'action'>) {
  return supabase
    .from('actions')
    .select('id, like, favorite, played')
    .eq('user', user)
    .eq('game', game);
}

export async function toggleUserAction({
  user,
  game,
  action,
}: UserActionParams) {
  const rowExists = await getUserActions({ user, game });

  if (rowExists.body?.length === 0) {
    await createUserActions({ user, action, game });
    return;
  }

  const actions = rowExists?.body?.[0];

  await supabase
    .from('actions')
    .update({ ...actions, [action]: !actions[action] })
    .eq('id', actions.id);
}

export async function storeToken(token: string) {
  const allTokens = await supabase.from('igbd_token').select('id');

  allTokens.body?.forEach(async ({ id }) => {
    await supabase.from('igbd_token').delete().eq('id', id);
  });

  await supabase.from('igbd_token').insert({ token: `Bearer ${token}` });
}

export async function getIGBDToken() {
  const allTokens = await supabase.from('igbd_token').select('token');

  const token = allTokens.body?.[0]?.token;

  if (!token) {
    return generateToken();
  }

  return token as string;
}
