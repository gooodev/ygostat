import { useAuth } from '@/hooks';
import { Button } from '@chakra-ui/react';

/** @pakcage */
export type LoginOutButtonProps = {};

/** @pakcage */
export const LoginOutButton = (_props: LoginOutButtonProps) => {
  const { login, logout, isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Button onClick={logout}>Logout</Button>
  ) : (
    <Button onClick={login}>Login</Button>
  );
};
