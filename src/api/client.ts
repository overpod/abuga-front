import { Client, cacheExchange, fetchExchange } from 'urql';

export const apiClient = new Client({
  url: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
});
