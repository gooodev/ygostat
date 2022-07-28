/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_FRONTEND_API_KEY: string;
  readonly VITE_HASURA_ENDPOINT: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
