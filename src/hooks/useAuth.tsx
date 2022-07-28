import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

// Wrap authentication logic to be easy to switch id service.
export const useAuth = () => {
  const { isAuthenticated, loginWithPopup, logout, getAccessTokenSilently, user } = useAuth0();

  const login = async () => {
    await loginWithPopup({ display: 'page' });
    console.log(user);
    location.reload();
  };

  const signout = () => {
    logout();
    location.reload();
  };

  const getToken = useCallback(async () => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      return null;
    }
    const token = await getAccessTokenSilently({ detailedResponse: true });
    return token.id_token;
  }, [isAuthenticated]);

  return {
    userId: user ? (user.appUserId as string) : null,
    isAuthenticated,
    getToken,
    login,
    logout: signout,
  };
};
