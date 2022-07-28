import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@/constants';
import { Auth0Provider } from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import { GraphqlProvider } from './GraphqlProvider';
import { ThemeProvider } from './ThemeProvider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  console.log('origin', window.location.origin);
  return (
    <RecoilRoot>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <GraphqlProvider>
          <ThemeProvider>{children} </ThemeProvider>
        </GraphqlProvider>
      </Auth0Provider>
    </RecoilRoot>
  );
};
