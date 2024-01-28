<script setup lang="ts">
import { Client, cacheExchange, fetchExchange, provideClient } from "@urql/vue";

const runtimeConfig = useRuntimeConfig();

const client = new Client({
  url: `${runtimeConfig.public.API_URL}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
});

provideClient(client);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
