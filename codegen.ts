import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    'src/api/types.ts': {
      schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      documents: 'src/api/requests/**/*.gql',
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        withHooks: false,
        withComponent: false,
      },
      overwrite: true,
      hooks: {
        afterOneFileWrite: ['prettier --write ./src/api/**/*.*'],
      },
    },
  },
};

export default config;
