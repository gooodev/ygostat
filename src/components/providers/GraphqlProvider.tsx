import { HASURA_ENDPOINT } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import { AuthConfig, authExchange } from '@urql/exchange-auth';
import { PropsWithChildren, useMemo } from 'react';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  makeOperation,
  Provider,
} from 'urql';

export const GraphqlProvider = ({ children }: PropsWithChildren<{}>) => {
  const { getToken } = useAuth();
  const authConfig: AuthConfig<{ token?: string } | null> = useMemo(
    () => ({
      getAuth: async () => {
        const token = await getToken();
        return token ? { token } : null;
      },
      willAuthError: ({ authState }) => {
        return authState?.token == null;
      },
      addAuthToOperation: ({ authState, operation }) => {
        if (authState == null || authState.token == null) {
          return operation;
        }
        console.log(authState);
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            headers: {
              Authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
    }),
    [getToken]
  );

  const client = useMemo(
    () =>
      createClient({
        url: HASURA_ENDPOINT,
        suspense: true,
        exchanges: [dedupExchange, cacheExchange, authExchange(authConfig), fetchExchange],
      }),
    [authConfig]
  );
  return <Provider value={client}>{children}</Provider>;
};
