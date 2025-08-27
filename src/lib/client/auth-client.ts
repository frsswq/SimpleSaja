import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000'
});

export const signIn = async (provider: 'google' | 'github') => {
  const data = await authClient.signIn.social({
    provider,
    callbackURL: '/'
  });

  return data;
};
