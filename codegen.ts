import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "api/generated.ts": {
      schema: `${process.env.API_URL}/graphql`,
      documents: "api/requests/**/*.gql",
      plugins: ["typescript", "typescript-operations", "typescript-vue-urql"],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
