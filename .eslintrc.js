module.exports = {
  ignorePatterns: ['dist/', 'vite.config.ts', '*.d.ts', 'codegen*'],
  plugins: [
    'react',
    '@typescript-eslint',
    'import-access',
    'strict-dependencies',
    'no-relative-import-paths',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        png: 'always',
        svg: 'always',
        json: 'always',
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^@/.*'] }],
    'strict-dependencies/strict-dependencies': [
      'error',
      [
        // For keeping easy to switch auth service.
        {
          module: '@auth0/auth0-react',
          allowReferenceFrom: ['src/hooks/useAuth.ts', 'src/components/providers'],
          allowSameModule: false,
        },
        // For keeping easy to switch graphql client.
        {
          module: '*urql/**',
          allowReferenceFrom: ['src/components/providers'],
          allowSameModule: false,
        },
        // Cannot access components directly.
        {
          module: 'src/components/**/*/*',
          allowReferenceFrom: [],
          allowSameModule: false,
        },
        {
          module: 'src/components/providers',
          allowReferenceFrom: ['src/main.tsx'],
          allowSameModule: false,
        },
        {
          module: 'src/components/pages',
          allowReferenceFrom: ['src/routes/RouteMap.tsx'],
          allowSameModule: false,
        },
        {
          module: 'src/components/features',
          allowReferenceFrom: [
            'src/components/features',
            'src/components/layouts',
            'src/components/models',
            'src/components/pages',
          ],
          allowSameModule: false,
        },
        {
          module: 'src/components/layouts',
          allowReferenceFrom: ['src/components/pages'],
          allowSameModule: false,
        },
      ],
    ],
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
    'import-access/jsdoc': ['error', { indexLoophole: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'eslint-import-resolver-custom-alias': {
      alias: {
        '@': './src',
      },
      extensions: ['.ts', '.tsx'],
    },
  },
};
